module Api
  class DeliveriesController < ApplicationController
    def create
      count = User.where(delivery_partner: true).count
      random_offset = rand(count)
      user = User.offset(random_offset).first

      order = Order.find_by(id: params[:delivery][:order_id])
      return render json: { error: 'Cannot find order' }, status: :not_found if !order

      order_user = order.id

      begin
        @delivery = Delivery.create({ user_id: user.id, order_id: order.id })
        render 'api/deliveries/create', status: :created

      rescue ArgumentError => e
        render json: { error: e.message }, status: :bad_request
      end
    end

    def index_by_user
      user = User.find_by(id: params[:id])

      if user
        @deliveries = (user.deliveries).order("created_at ASC")
        render 'api/deliveries/index'
      end
    end

    private

    def delivery_params
      params.require(:delivery).permit(:order_id, user_id)
    end
  end
end
