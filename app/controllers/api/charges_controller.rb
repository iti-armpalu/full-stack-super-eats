module Api
  class ChargesController < ApplicationController
    def create

      # The first part of the code is to make sure the user is logged in, and retrieve the order that was just made.
      token = cookies.signed[:supereats_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'user not logged in' }, status: :unauthorized if !session

      order = Order.find_by(id: params[:order_id])
      return render json: { error: 'cannot find order' }, status: :not_found if !order

      restaurant = order.restaurant
      total = 50

      # We need the order data entry because we need to associate the new charge to the correct order.
      session = Stripe::Checkout::Session.create(
        payment_method_types: ['card'],
        line_items: [{
          name: "Order from #{restaurant.name}",
          total: (total * 100.0).to_i, # Stripe API expects the amount to be given in cents, therefore we multiple it by 100
          currency: "usd",
          quantity: 1,
        }],
        mode: "payment",
        success_url: "#{ENV['URL']}/order/#{order.id}/success",
        cancel_url: "#{ENV['URL']}#{params[:cancel_url]}",
      )
      @charge = order.charges.new({
        checkout_session_id: session.id,
        currency: 'usd',
        total: total
      })
      if @charge.save
        render 'api/charges/create', status: :created
      else
        render json: { error: 'charge could not be created' }, status: :bad_request
      end
    end
  end
end
