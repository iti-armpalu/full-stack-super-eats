Rails.application.routes.draw do
  root to: "static_pages#home"

  # Customer
  get '/login'                      => 'static_pages#login'
  get '/restaurants'                => 'static_pages#restaurants'
  get '/restaurant/id'              => 'static_pages#restaurant'
  get '/order/id/success'           => 'static_pages#order_success'
  get '/username/orders'            => 'static_pages#orders'

  # Business
  get '/business/login'             => 'static_pages#business_login'
  get '/business/restaurants'       => 'static_pages#business_restaurants'
  get '/business/add-restaurant'    =>'static_pages#business_add_restaurant'

end
