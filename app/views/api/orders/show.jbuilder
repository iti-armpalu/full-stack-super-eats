json.order do
  json.id           @order.id
  json.created_at   @order.created_at

  json.restaurant do
    json.id             @order.restaurant.id
    json.name           @order.restaurant.name
    json.delivery_time  @order.restaurant.delivery_time
  end

  json.user do
    json.id         @order.user.id
    json.address    @order.user.address
    json.city       @order.user.city
    json.country    @order.user.country
  end

end