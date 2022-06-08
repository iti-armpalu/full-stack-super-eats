module Api
  class OrdersController < ApplicationController

    def create
      token = cookies.signed[:supereats_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'user not logged in' }, status: :unauthorized if !session

      restaurant = Restaurant.find_by(id: params[:order][:restaurant_id])
      return render json: { error: 'cannot find property' }, status: :not_found if !restaurant

      begin
        @order = Order.create({ user_id: session.user.id, restaurant_id: restaurant.id })
        render 'api/orders/create', status: :created

      rescue ArgumentError => e
        render json: { error: e.message }, status: :bad_request
      end

    end

    def index_by_user
      user = User.find_by(email: params[:email])

      if user
        @orders = user.orders
        render 'api/orders/index'
      end
    end

    private

    def order_params
      params.require(:order).permit(:restaurant_id)
    end

  end
end
