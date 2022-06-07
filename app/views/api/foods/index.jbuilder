json.foods do
  json.array! @foods do |food|
    json.id             food.id
    json.name           food.name
    json.description    food.description
    json.price          food.price
    json.image_url      food.image_url
   

  end
end