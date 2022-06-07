module Api
  class RestaurantsController < ApplicationController
    def index
      @restaurants = Restaurant.order(created_at: :desc).page(params[:page]).per(6)
      return render json: { error: 'not_found' }, status: :not_found if !@restaurants

      render 'api/restaurants/index', status: :ok
    end

    def show
      @restaurant = Restaurant.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@restaurant
      render 'api/restaurants/show', status: :ok
    end
    
  end
end
