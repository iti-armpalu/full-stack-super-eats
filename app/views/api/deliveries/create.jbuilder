json.delivery do
  json.id       @delivery.id

  json.order do
    json.id     @delivery.order.id
  end

  json.user do
    json.id     @delivery.user.id
  end

end