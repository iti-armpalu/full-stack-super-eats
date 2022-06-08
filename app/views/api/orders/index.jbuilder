json.orders do

  json.array! @orders do |order|
    json.id       order.id

    json.restaurant do
      json.id              order.restaurant.id
      json.name            order.restaurant.name
      json.image_url       order.restaurant.image_url 
    end

    json.user do
      json.id               order.user.id
      json.first_name       order.user.first_name
    end

  end
end