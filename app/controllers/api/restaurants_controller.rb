module Api
  class RestaurantsController < ApplicationController
    def index
      if (params[:restaurant_type] == 'All' || params[:restaurant_type] == 'undefined' || params[:restaurant_type] == nil)
        @restaurants = Restaurant.all.order(created_at: :asc).page(params[:page]).per(6)
        return render json: { error: 'not_found' }, status: :not_found if !@restaurants
      else
        @restaurants = Restaurant.filter_by_type(params[:restaurant_type]).order(created_at: :asc).page(params[:page]).per(6)
      end

      render 'api/restaurants/index', status: :ok
    end

    def show
      @restaurant = Restaurant.find_by(id: params[:id])

      return render json: { error: 'not_found' }, status: :not_found if !@restaurant
      render 'api/restaurants/show', status: :ok
    end
    
  end
end
