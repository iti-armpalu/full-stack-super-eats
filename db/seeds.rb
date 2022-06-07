# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([
  { 
    first_name: "Tommy", 
    last_name: "Smith",
    email: "tommy@test.com", 
    password: "password",
    address: "9 Smile Street",
    city: "Miami",
    country: "United States"
  },
  { 
    first_name: "Lisa", 
    last_name: "Smith",
    email: "lisa@test.com", 
    password: "password",
    address: "9 Smile Street",
    city: "Miami",
    country: "United States"
  },

])

restaurants = Restaurant.create!([
  {
    name: "Season Restaurant",
    address: "Cool Street",
    city: "New York",
    country: "United States", 
    restaurant_type: "Bowl",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 30,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
    user: users.first
  },{
    name: "Pizza Hut",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Pizza",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 30,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069",
    user: users.first
  },{
    name: "High Joint",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Burger",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 40,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    user: users.first
  },{
    name: "Fish Taverna",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Seafood",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 50,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674",
    user: users.first
  },{
    name: "Mr. Nice Coffee",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Hot beverages",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 40,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    user: users.first
  },{
    name: "Pink Donuts",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Dessert",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 30,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1604287094096-59a7dee979e1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832",
    user: users.first
  },{
    name: "Pickl",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Burger",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 20,
    delivery_fee: 4,
    image_url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674",
    user: users.first
  },{
    name: "Seaside Restaurant",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Seafood",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 60,
    delivery_fee: 4,
    image_url: "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652",
    user: users.first
  },{
    name: "Dashing Desserts",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Dessert",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 20,
    delivery_fee: 4,
    image_url: "https://images.unsplash.com/photo-1567941723610-db0bcb4cca67?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832",
    user: users.first
  },{
    name: "Mucho Mexicano",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Mexican",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 30,
    delivery_fee: 4,
    image_url: "https://images.unsplash.com/photo-1625167171750-419e95f877d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    user: users.first
  },{
    name: "Wicked Wings",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Chicken",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 20,
    delivery_fee: 3,
    image_url: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
    user: users.first
  },{
    name: "Salad Station",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Salad",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 25,
    delivery_fee: 3,
    image_url: "https://images.unsplash.com/photo-1595786802424-d6efbc413db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    user: users.first
  },{
    name: "Rancho Drinks",
    address: "Cool Street",
    city: "New York",
    country: "United States",
    restaurant_type: "Soft drinks",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 20,
    delivery_fee: 3,
    image_url: "https://images.unsplash.com/photo-1524802020103-aa46eaffcaa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    user: users.first
  }
])