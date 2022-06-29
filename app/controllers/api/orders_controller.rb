module Api
  class OrdersController < ApplicationController

    def create
      token = cookies.signed[:supereats_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'User not logged in' }, status: :unauthorized if !session

      restaurant = Restaurant.find_by(id: params[:order][:restaurant_id])
      return render json: { error: 'Cannot find restaurant' }, status: :not_found if !restaurant

      begin
        @order = Order.create({ user_id: session.user.id, restaurant_id: restaurant.id, total: params[:order][:total] })
        render 'api/orders/create', status: :created

      rescue ArgumentError => e
        render json: { error: e.message }, status: :bad_request
      end
    end


    def show
      @order = Order.find_by(id:params[:id])
      return render json: { error: 'Cannot find order' }, status: :not_found if !@order
      render 'api/orders/show'
    end


    def index_by_user
      user = User.find_by(id: params[:id])

      if user
        @orders = (user.orders).order("created_at DESC")
        render 'api/orders/index'
      end
    end

    private

    def order_params
      params.require(:order).permit(:restaurant_id, total)
    end

  end
end
