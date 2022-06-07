json.restaurant do
  json.id             @restaurant.id
  json.name           @restaurant.name
  json.address        @restaurant.address
  json.city           @restaurant.city
  json.country        @restaurant.country
  json.opening_time   @restaurant.opening_time
  json.closing_time   @restaurant.closing_time
  json.delivery_time  @restaurant.delivery_time
  json.delivery_fee   @restaurant.delivery_fee
  json.image_url      @restaurant.image_url
  
  json.user do
    json.id          @restaurant.user.id
  end
end