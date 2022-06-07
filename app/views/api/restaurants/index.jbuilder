json.total_pages @restaurants.total_pages
json.next_page @restaurants.next_page

json.restaurants do
  json.array! @restaurants do |restaurant|
    json.id                 restaurant.id
    json.name               restaurant.name
    json.address            restaurant.address
    json.city               restaurant.city
    json.country            restaurant.country
    json.restaurant_type    restaurant.restaurant_type
    json.delivery_time      restaurant.delivery_time
    json.image_url          restaurant.image_url
    
  end
end