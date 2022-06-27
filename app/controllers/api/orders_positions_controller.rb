module Api
  class OrdersPositionsController < ApplicationController

    def create
      # token = cookies.signed[:supereats_session_token]
      # session = Session.find_by(token: token)
      # return render json: { error: 'user not logged in' }, status: :unauthorized if !session

      food = Food.find_by(id: params[:orders_position][:food_id])
      return render json: { error: 'cannot find food' }, status: :not_found if !food

      begin
        @orders_position = OrdersPosition.create({ food_id: food.id, quantity: params[:orders_position][:quantity] })
        render 'api/orders_positions/create', status: :created

      rescue ArgumentError => e
        render json: { error: e.message }, status: :bad_request
      end
    end

    def index
      @orders_positions = OrdersPosition.all
      return render json: { error: 'not_found' }, status: :not_found if !@orders_positions

      render 'api/orders_positions/index', status: :ok
    end

    def update
      # token = cookies.signed[:airbnb_session_token]
      # session = Session.find_by(token: token)
      # user = session.user

      @orders_position = OrdersPosition.find_by(id: params[:id])

      return render 'not_found', status: :not_found if not @orders_position
      return render 'bad_request', status: :bad_request if not @orders_position.update(orders_position_params)

      render 'api/orders_positions/show', status: :ok
    end

    def destroy
      # token = cookies.signed[:airbnb_session_token]
      # session = Session.find_by(token: token)

      # return render json: { success: false } unless session

      # user = session.user
      orders_position = OrdersPosition.find_by(id: params[:id])

      # if property and property.user == user and property.destroy
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

    private

    def orders_position_params
      params.require(:orders_position).permit(:food_id, :quantity)
    end



  end
end  
