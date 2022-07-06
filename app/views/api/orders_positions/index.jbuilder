json.orders_positions do
  json.array! @orders_positions do |orders_position|
    json.id                 orders_position.id
    json.quantity           orders_position.quantity   

    json.food do
      json.id             orders_position.food.id
      json.name           orders_position.food.name
      json.price          orders_position.food.price
    end

    json.restaurant do
      json.id             orders_position.restaurant.id
    end
    
    
  end
end