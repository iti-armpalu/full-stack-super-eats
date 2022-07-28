module Api
  class OrdersPositionsController < ApplicationController

    def create
      token = cookies.signed[:supereats_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'user not logged in' }, status: :unauthorized if !session

      food = Food.find_by(id: params[:orders_position][:food_id])
      return render json: { error: 'cannot find food' }, status: :not_found if !food

      restaurant = Restaurant.find_by(id: params[:orders_position][:restaurant_id])
      return render json: { error: 'cannot find restaurant' }, status: :not_found if !restaurant

      begin
        @orders_position = OrdersPosition.create({ user_id: session.user.id, food_id: food.id, restaurant_id: restaurant.id, quantity: params[:orders_position][:quantity] })
        render 'api/orders_positions/create', status: :created

      rescue ArgumentError => e
        render json: { error: e.message }, status: :bad_request
      end
    end

    def index_by_restaurant
      restaurant = Restaurant.find_by(id: params[:id])
      return render json: { error: 'Cannot find restaurant.' }, status: :not_found if !restaurant
      @orders_positions = restaurant.orders_positions
      render 'api/orders_positions/index', status: :ok
    end

    def index_by_order
      order = Order.find_by(id: params[:id])
      return render json: { error: 'Cannot find order.' }, status: :not_found if !order
      @orders_positions = order.orders_positions
      render 'api/orders_positions/index', status: :ok
    end

    def destroy
      # token = cookies.signed[:supereats_session_token]
      # session = Session.find_by(token: token)

      # return render json: { success: false } unless session

      # user = session.user
      orders_position = OrdersPosition.find_by(id: params[:id])

      if orders_position and orders_position.destroy
        render json: {
          success: true
        }
      else
        render json: {
          success: false
        }
      end
    end

    def destroy_all_index_by_restaurant
      restaurant = Restaurant.find_by(id: params[:id])
      return render json: { error: 'cannot find restaurant' }, status: :not_found if !restaurant

      orders_positions = restaurant.orders_positions
      
      if orders_positions and orders_positions.destroy_all
        render json: {
          success: true
        }
      else
        render json: {
          success: false
        }
      end

    end

    private

    def orders_position_params
      params.require(:orders_position).permit(:food_id, :restaurant_id, :quantity)
    end



  end
end  
