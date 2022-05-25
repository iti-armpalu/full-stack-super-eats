Rails.application.routes.draw do
  root to: "static_pages#home"

  get '/login'                      => 'static_pages#login'
  get '/restaurants'                => 'static_pages#restaurants'
  get '/order/id/success'           => 'static_pages#order_success'

end
