module Api
  class FoodsController < ApplicationController

    def index_by_restaurant
      restaurant = Restaurant.find_by(id: params[:id])

      return render json: { error: 'cannot find restaurant' }, status: :not_found if !restaurant

        @foods = (restaurant.foods).order(created_at: :desc)
        render 'api/foods/index'
    end

  end
end
