json.user do
  json.user_id    @user.id
  json.first_name @user.first_name
  json.last_name  @user.last_name
  json.email      @user.email
  json.address    @user.address
  json.city       @user.city
  json.country    @user.country
end