Rails.application.routes.draw do
  root to: "static_pages#home"

  # Customer
  get '/login'                              => 'static_pages#login'
  get '/restaurants'                        => 'static_pages#restaurants'
  get '/restaurant/:id'                     => 'static_pages#restaurant'
  get '/order/:id/success'                  => 'static_pages#order_success'
  get '/user/:id/orders'                    => 'static_pages#orders'

  # Delivery partner
  get '/delivery/login'                     => 'static_pages#delivery_login'
  get '/delivery/user/:id/trips'            => 'static_pages#delivery_trips'

  namespace :api do
    # Users
    post '/users'                           => 'users#create'

    # Sessions
    post '/sessions'                        => 'sessions#create'
    get  '/authenticated'                   => 'sessions#authenticated'
    delete '/sessions'                      => 'sessions#destroy'

    # Restaurants
    post '/restaurants'                     => 'restaurants#create'
    get '/restaurants'                      => 'restaurants#index'
    get '/restaurants/:id'                  => 'restaurants#show'

    # Foods
    post '/foods'                           => 'foods#create'
    get '/restaurants/:id/foods'            => 'foods#index_by_restaurant'

    # Orders 
    post '/orders'                          => 'orders#create'
    get '/orders/:id'                       => 'orders#show'
    get '/users/:id/orders'                 => 'orders#index_by_user'

    # Orders positions
    post '/orders_positions'                => 'orders_positions#create'
    get '/restaurants/:id/orders_positions' => 'orders_positions#index_by_restaurant'
    patch '/orders_positions/:id'           => 'orders_positions#update'
    delete '/orders_positions/:id'          => 'orders_positions#destroy'
    delete '/restaurants/:id/orders_positions'  => 'orders_positions#destroy_all_index_by_restaurant'

    # Charges
    post '/charges'                         => 'charges#create'

    # Deliveries
    post '/deliveries'                      => 'deliveries#create'
    get '/users/:id/deliveries'             => 'deliveries#index_by_user'

    # Stripe webhook
    post '/charges/mark_complete'           => 'charges#mark_complete'

  end


end
