module Api
  class FoodsController < ApplicationController

    def index_by_restaurant
      restaurant = Restaurant.find_by(id: params[:id])

      return render json: { error: 'cannot find restaurant' }, status: :not_found if !restaurant

      @foods = (restaurant.foods).order(created_at: :asc)
      render 'api/foods/index'
    end

    def show
      @food = Food.find_by(id:params[:id])
      return render json: { error: 'Cannot find food' }, status: :not_found if !@food
      render 'api/foods/show'
    end

  end
end
