class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def login
    render 'login'
  end

  def restaurants
    render 'restaurants'
  end

  def restaurant
    @data = { restaurant_id: params[:id] }.to_json
    render 'restaurant'
  end

  def order_success
    @data = { order_id: params[:id] }.to_json
    render 'order_success'
  end

  def orders
    @data = { user_id: params[:id] }.to_json
    render 'orders'
  end

  def delivery_trips
    @data = { user_id: params[:id] }.to_json
    render 'delivery_trips'
  end

end
