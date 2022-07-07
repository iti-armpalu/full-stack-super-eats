json.deliveries do

  json.array! @deliveries do |delivery|
    json.id                 delivery.id
    json.created_at         delivery.created_at

    json.order do
      json.id               delivery.order.id

      json.restaurant do
        json.id             delivery.order.restaurant.id
        json.name           delivery.order.restaurant.name
        json.address        delivery.order.restaurant.address
        json.city           delivery.order.restaurant.city
        json.country        delivery.order.restaurant.country
        json.delivery_fee   delivery.order.restaurant.delivery_fee
      end

      json.user do
        json.id             delivery.order.user.id
        json.first_name     delivery.order.user.first_name
        json.last_name      delivery.order.user.last_name
        json.address        delivery.order.user.address
        json.city           delivery.order.user.city
        json.country        delivery.order.user.country
      end
    end

  end
end