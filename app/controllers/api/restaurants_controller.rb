module Api
  class RestaurantsController < ApplicationController
    def index
      @restaurants = Restaurant.order(created_at: :desc).page(params[:page]).per(6)
      return render json: { error: 'not_found' }, status: :not_found if !@restaurants

      render 'api/restaurants/index', status: :ok
    end
  end
end
