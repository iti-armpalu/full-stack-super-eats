json.order do
  json.id       @order.id
  json.subtotal @order.subtotal

  json.restaurant do
    json.id     @order.restaurant.id
    json.name   @order.restaurant.name
  end

  json.delivery_user do
    json.id     @order.delivery_user.id
    json.first_name   @order.delivery_user.first_name
  end

end