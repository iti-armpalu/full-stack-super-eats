Rails.application.routes.draw do
  root to: "static_pages#home"

  # Customer
  get '/login'                      => 'static_pages#login'
  get '/restaurants'                => 'static_pages#restaurants'
  get '/restaurant/:id'              => 'static_pages#restaurant'
  get '/order/:id/success'           => 'static_pages#order_success'
  get '/user/:id/orders'            => 'static_pages#orders'

  # Business
  get '/business/login'             => 'static_pages#business_login'

  # Delivery partner
  get '/delivery/login'             => 'static_pages#delivery_login'
  get '/delivery/user/:id/trips'             => 'static_pages#delivery_trips'

  namespace :api do
    # Users
    post '/users'                   => 'users#create'

    # Delivery Users
    post '/delivery_users'          => 'delivery_users#create'

    # Sessions
    post '/sessions'                => 'sessions#create'
    get  '/authenticated'           => 'sessions#authenticated'
    delete '/sessions'              => 'sessions#destroy'

    # Restaurants
    post '/restaurants'             => 'restaurants#create'
    get '/restaurants'              => 'restaurants#index'
    get '/restaurants/:id'          => 'restaurants#show'

    # Foods
    post '/foods'                   => 'foods#create'
    get '/restaurants/:id/foods'    => 'foods#index_by_restaurant'

    # Orders 
    post '/orders'                  => 'orders#create'
    get '/orders/:id'               => 'orders#show'
    get '/users/:id/orders'         => 'orders#index_by_user'

    # Orders positions
    post '/orders_positions'        => 'orders_positions#create'
    get '/orders_positions'         => 'orders_positions#index'
    patch '/orders_positions/:id'   => 'orders_positions#update'
    delete '/orders_positions/:id'  => 'orders_positions#destroy'

    # Charges
    post '/charges'                 => 'charges#create'

    # Stripe webhook
    post '/charges/mark_complete'   => 'charges#mark_complete'
    get '/trips/'                   => 'trips#index'

  end


end
