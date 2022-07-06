json.order do
  json.id       @order.id
  json.subtotal @order.subtotal

  json.restaurant do
    json.id     @order.restaurant.id
    json.name   @order.restaurant.name
  end

end