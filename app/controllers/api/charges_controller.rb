module Api
  class ChargesController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:mark_complete]

    def create
      # The first part of the code is to make sure the user is logged in, and retrieve the order that was just made.
      token = cookies.signed[:supereats_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'user not logged in' }, status: :unauthorized if !session

      order = Order.find_by(id: params[:order_id])
      return render json: { error: 'cannot find order' }, status: :not_found if !order

      restaurant = order.restaurant
      amount = order.subtotal + order.restaurant.delivery_fee

      # We need the order data entry because we need to associate the new charge to the correct order.
      session = Stripe::Checkout::Session.create(
        payment_method_types: ['card'],
        line_items: [{
          name: "Order from #{restaurant.name}",
          amount: (amount * 100.0).to_i, # Stripe API expects the amount to be given in cents, therefore we multiple it by 100
          currency: "usd",
          quantity: 1,
        }],
        mode: "payment",
        success_url: "#{ENV['URL']}/order/#{order.id}/success",
        cancel_url: "#{ENV['URL']}#{params[:cancel_url]}",
      )

      # Create(post) a new charge
      @charge = order.charges.new({
        checkout_session_id: session.id,
        currency: 'usd',
      })
      if @charge.save
        render 'api/charges/create', status: :created
      else
        render json: { error: 'charge could not be created' }, status: :bad_request
      end
    end

    
    def mark_complete
      # You can find your endpoint's secret in your webhook settings
      endpoint_secret = ENV['STRIPE_MARK_COMPLETE_WEBHOOK_SIGNING_SECRET']

      payload = request.body.read
      event = nil

      # Verify webhook signature and extract the event
      # See https://stripe.com/docs/webhooks/signatures for more information.
      sig_header = request.env['HTTP_STRIPE_SIGNATURE']
      begin
        event = Stripe::Webhook.construct_event(
          payload, sig_header, endpoint_secret
        )
      rescue JSON::ParserError => e
        # Invalid payload
        return head :bad_request
      rescue Stripe::SignatureVerificationError => e
        # Invalid signature
        return head :bad_request
      end

      # Handle the checkout.session.completed event
      if event['type'] == 'checkout.session.completed'
        session = event['data']['object']

        # Fulfill the purchase, mark related charge as complete
        charge = Charge.find_by(checkout_session_id: session.id)
        return head :bad_request if !charge

        charge.update({ complete: true })

        return head :ok
      end

      return head :bad_request
    end

  end
end
