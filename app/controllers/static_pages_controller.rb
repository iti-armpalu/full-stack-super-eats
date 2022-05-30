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

  def business_restaurants
    render 'business_restaurants'
  end

  def delivery_login
    render 'delivery_login'
  end

end
