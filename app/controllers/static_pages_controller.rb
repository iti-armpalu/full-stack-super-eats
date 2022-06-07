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
    render 'order_success'
  end

  def orders
    render 'orders'
  end

  def business_login
    render 'business_login'
  end

  def delivery_login
    render 'delivery_login'
  end

  def delivery_trips
    render 'delivery_trips'
  end

end
