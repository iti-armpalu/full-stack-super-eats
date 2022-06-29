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

delivery_users = DeliveryUser.create([
  { 
    first_name: "Chris", 
    last_name: "Tucker",
    email: "chris@test.com", 
    password: "password",
    phone_number: "056789090"
  },{ 
    first_name: "Monica", 
    last_name: "Geller",
    email: "monica@test.com", 
    password: "password",
    phone_number: "056789080"
  },
])

restaurants = Restaurant.create!([
  {
    name: "Poke Rice",
    address: "162 West 4th Street",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11284.788775792022!2d-74.00891993680186!3d40.724962286214875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25993e80e3d69%3A0xb20c6e129c57a4ff!2sPoke%20Rice!5e0!3m2!1sen!2sae!4v1656512318858!5m2!1sen!2sae",
    restaurant_type: "Bowl",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 30,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
    user: users.first
  },{
    name: "Bleecker Street Pizza",
    address: "69 7th Ave S",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.73242978082!2d-74.00891993809147!3d40.72499205590639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259939fca75ad%3A0xad63a7908a34c8ef!2sBleecker%20Street%20Pizza!5e0!3m2!1sen!2sae!4v1656512401856!5m2!1sen!2sae",
    restaurant_type: "Pizza",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 30,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069",
    user: users.first
  },{
    name: "Shake Shack",
    address: "20 3rd Ave",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.661465840398!2d-74.01430249214172!3d40.73088490267398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599b92cfd14b%3A0x78a90f009161bc07!2sShake%20Shack!5e0!3m2!1sen!2sae!4v1656512594363!5m2!1sen!2sae",
    restaurant_type: "Burger",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 40,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    user: users.first
  },{
    name: "Lure Fishbar",
    address: "142 Mercer St",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14504.850073812036!2d-74.0056878291171!3d40.723964391591785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598efa832d81%3A0x32a7225f9e642e81!2sLure%20Fishbar!5e0!3m2!1sen!2sae!4v1656512698228!5m2!1sen!2sae",
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

foods = Food.create!([
  {
    name: "Aloha Poke",
    description: "Salmon, light ponzu sauce, red onion, edamame, cherry tomatoes, seaweed salad, mango, avocado, sesame seeds, chilli flakes and ginger. Recommended Base: Signature rice.",
    price: 12,
    image_url: "https://images.unsplash.com/photo-1604259597308-5321e8e4789c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702",
    restaurant: restaurants.first
  },{
    name: "Waikiki Poke",
    description: "Raw tuna, spicy mayo sauce, edamame, cucumber, spring onion, masago, pineapple, spicy kale, chilli flakes, sesame seeds and nori strips. Recommended Base: Brown rice.",
    price: 12,
    image_url: "https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180",
    restaurant: restaurants.first
  },{
    name: "Spicy Maui Poke",
    description: "Raw salmon, raw tuna, hot chilli ponzu sauce, jalapeno, edamame, cucumber, avocado, snow peas, papaya, crunchy garlic, togarashi and ginger. Recommended base: signature rice.",
    price: 12,
    image_url: "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180",
    restaurant: restaurants.first
  },
  
  {
    name: "Classic Pepperoni",
    description: "Raw tuna, spicy mayo sauce, edamame, cucumber, spring onion, masago, pineapple, spicy kale, chilli flakes, sesame seeds and nori strips. Recommended Base: Brown rice.",
    price: 16,
    image_url: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    restaurant: restaurants.second
  },
  {
    name: "Giardiniera",
    description: "Broccoli, mushrooms, red peppers, red onion, black olives, passata, mozzarella and garlic oil. Finished with oregano.",
    price: 15,
    image_url: "https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    restaurant: restaurants.second
  },
  {
    name: "Margherita",
    description: "Go back to where it all began with the classic cheese and tomato base, topped with basil leaves.",
    price: 14,
    image_url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    restaurant: restaurants.second
  },
  {
    name: "The OG",
    description: "Wagyu patty, cheddar cheese, onion, tomatoes, lettuce, pickles, and our special sauce.",
    price: 8,
    image_url: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80",
    restaurant: restaurants.third
  },
  {
    name: "Cheese Burger",
    description: "Wagyu patty, cheddar cheese, and our special sauce.",
    price: 6,
    image_url: "https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    restaurant: restaurants.third
  },
  {
    name: "Bucket of Mussels",
    description: "Mussels served in a bucket with creamy white sauce.",
    price: 12,
    image_url: "https://images.unsplash.com/photo-1600265721436-734abbfe2137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    restaurant: restaurants.fourth
  },
  
  
  {
    name: "Cappucino",
    description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
    price: 3,
    image_url: "https://images.unsplash.com/photo-1523942839745-7848c839b661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    restaurant: restaurants.fifth
  },{
    name: "Latte",
    description: "Our dark, rich espresso is balanced with steamed milk and topped with a light layer of foam. A perfect milk-forward warm-up.",
    price: 3,
    image_url: "https://images.unsplash.com/photo-1550247611-e651810312fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    restaurant: restaurants.fifth
  },{
    name: "Caffe Mocha",
    description: "Espresso combined with mocha sauce and steamed milk.",
    price: 3,
    image_url: "https://images.unsplash.com/photo-1550247611-e651810312fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    restaurant: restaurants.fifth
  }
])