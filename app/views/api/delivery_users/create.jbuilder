json.delivery_user do
  json.user_id        @delivery_user.id
  json.first_name     @delivery_user.first_name
  json.last_name      @delivery_user.last_name
  json.email          @delivery_user.email
  json.phone_number   @delivery_user.phone_number
end