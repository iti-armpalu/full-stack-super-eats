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
    city: "New York",
    country: "United States",
    phone_number: "050505050",
    delivery_partner: true,
  },
  { 
    first_name: "Catherine", 
    last_name: "Smith",
    email: "catherine@test.com", 
    password: "password",
    address: "9 Smile Street",
    city: "New York",
    country: "United States",
    phone_number: "0606060606",
    delivery_partner: true,
  },
  { 
    first_name: "Lisa", 
    last_name: "Smith",
    email: "lisa@test.com", 
    password: "password",
    address: "9 Smile Street",
    city: "New York",
    country: "United States",
    phone_number: "050505050",
    delivery_partner: false,
  }

])

restaurants = Restaurant.create!([
  {
    name: "Poke Rice",
    address: "162 West 4th Street",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11284.788775792022!2d-74.00891993680186!3d40.724962286214875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25993e80e3d69%3A0xb20c6e129c57a4ff!2sPoke%20Rice!5e0!3m2!1sen!2sae!4v1656512318858!5m2!1sen!2sae",
    restaurant_type: "Bowl",
    type_icon: "bowl-food",
    price_range: "$$",
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
    type_icon: "pizza-slice",
    price_range: "$$",
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
    type_icon: "burger",
    price_range: "$$",
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
    type_icon: "fish",
    price_range: "$$$$",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 50,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674",
    user: users.first
  },{
    name: "Birch Coffee",
    address: "884 9th Ave",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48347.543038251344!2d-74.0286923743333!3d40.76815109071249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25858fa153d87%3A0xde230873a4d847fb!2sBirch%20Coffee!5e0!3m2!1sen!2sae!4v1656661553362!5m2!1sen!2sae",
    restaurant_type: "Hot beverages",
    type_icon: "mug-hot",
    price_range: "$",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 40,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    user: users.first
  },{
    name: "The Doughnut Project",
    address: "10 Morton St",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24187.201763894464!2d-74.02535362299888!3d40.731218237026226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25993a9e3bb8d%3A0xe7d2313531697c45!2sThe%20Doughnut%20Project!5e0!3m2!1sen!2sae!4v1656661723175!5m2!1sen!2sae",
    restaurant_type: "Dessert",
    type_icon: "ice-cream",
    price_range: "$",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 30,
    delivery_fee: 5,
    image_url: "https://images.unsplash.com/photo-1604287094096-59a7dee979e1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832",
    user: users.first
  },{
    name: "The Burgary",
    address: "67 Clinton St",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20249.196025262645!2d-74.02421240478182!3d40.72228092217956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25981bd1cd983%3A0xce1becd76ef6fe74!2sThe%20Burgary!5e0!3m2!1sen!2sae!4v1656663816184!5m2!1sen!2sae",
    restaurant_type: "Burger",
    type_icon: "burger",
    price_range: "$$",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 20,
    delivery_fee: 4,
    image_url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674",
    user: users.first
  },{
    name: "Luke's Lobster Union Square",
    address: "124 University Pl",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12092.945534777926!2d-74.00773061320646!3d40.73482383238747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259985a6b4e29%3A0xb9df668ecf91fab3!2sLuke&#39;s%20Lobster%20Union%20Square!5e0!3m2!1sen!2sae!4v1656664246023!5m2!1sen!2sae",
    restaurant_type: "Seafood",
    type_icon: "fish",
    price_range: "$$$$",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 60,
    delivery_fee: 4,
    image_url: "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652",
    user: users.first
  },{
    name: "Little Cupcake Bakeshop",
    address: "30 Prince St",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12095.135395006246!2d-74.01293876598832!3d40.72277460725251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f585d7627%3A0xac8afce849d773db!2sLittle%20Cupcake%20Bakeshop!5e0!3m2!1sen!2sae!4v1656664882430!5m2!1sen!2sae",
    restaurant_type: "Dessert",
    type_icon: "ice-cream",
    price_range: "$$",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 20,
    delivery_fee: 4,
    image_url: "https://images.unsplash.com/photo-1567941723610-db0bcb4cca67?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832",
    user: users.first
  },{
    name: "Dos Toros Taqueria",
    address: "11 Carmine St",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.620091485796!2d-74.02026236057284!3d40.73111254582675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259924a4e886b%3A0x1f7d5fd5f59bcede!2sDos%20Toros%20Taqueria!5e0!3m2!1sen!2sae!4v1656666326611!5m2!1sen!2sae",
    restaurant_type: "Mexican",
    type_icon: "pepper-hot",
    price_range: "$$$",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 30,
    delivery_fee: 4,
    image_url: "https://images.unsplash.com/photo-1625167171750-419e95f877d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    user: users.first
  },{
    name: "Wingstop",
    address: "77 Lexington Ave",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18231.226920451383!2d-73.99992406215863!3d40.740620373975794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2597b8abde101%3A0xbf343bc9e554271c!2sWingstop!5e0!3m2!1sen!2sae!4v1656666415823!5m2!1sen!2sae",
    restaurant_type: "Chicken",
    type_icon: "drumstick-bite",
    price_range: "$$",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 20,
    delivery_fee: 3,
    image_url: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
    user: users.first
  },{
    name: "Sweetgreen",
    address: "2937 Broadway",
    price_range: "$$",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24159.530105186015!2d-73.99977028369904!3d40.80728450103207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63eafcb6fdd%3A0x45db2c5e844470cb!2ssweetgreen!5e0!3m2!1sen!2sae!4v1656666505082!5m2!1sen!2sae",
    restaurant_type: "Salad",
    type_icon: "seedling",
    opening_time: 9,
    closing_time: 10,
    delivery_time: 25,
    delivery_fee: 3,
    image_url: "https://images.unsplash.com/photo-1595786802424-d6efbc413db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    user: users.first
  },{
    name: "Boisson Upper West Side",
    address: "326 Columbus Ave",
    city: "New York",
    country: "United States",
    address_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48339.106691637026!2d-74.04735803604123!3d40.77974526957735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25935808bbe25%3A0x3b05578083b7b0e8!2sBoisson%20Upper%20West%20Side%20%E2%80%94Non-Alcoholic%20Spirits%2C%20Beer%2C%20and%20Wine%20Shop!5e0!3m2!1sen!2sae!4v1656666638764!5m2!1sen!2sae",
    restaurant_type: "Soft drinks",
    type_icon: "bottle-water",
    price_range: "$",
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
    restaurant: restaurants[0]
  },{
    name: "Waikiki Poke",
    description: "Raw tuna, spicy mayo sauce, edamame, cucumber, spring onion, masago, pineapple, spicy kale, chilli flakes, sesame seeds and nori strips. Recommended Base: Brown rice.",
    price: 12,
    image_url: "https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180",
    restaurant: restaurants[0]
  },{
    name: "Spicy Maui Poke",
    description: "Raw salmon, raw tuna, hot chilli ponzu sauce, jalapeno, edamame, cucumber, avocado, snow peas, papaya, crunchy garlic, togarashi and ginger. Recommended base: signature rice.",
    price: 12,
    image_url: "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180",
    restaurant: restaurants[0]
  },
  
  {
    name: "Classic Pepperoni",
    description: "Raw tuna, spicy mayo sauce, edamame, cucumber, spring onion, masago, pineapple, spicy kale, chilli flakes, sesame seeds and nori strips. Recommended Base: Brown rice.",
    price: 16,
    image_url: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    restaurant: restaurants[1]
  },
  {
    name: "Giardiniera",
    description: "Broccoli, mushrooms, red peppers, red onion, black olives, passata, mozzarella and garlic oil. Finished with oregano.",
    price: 15,
    image_url: "https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    restaurant: restaurants[1]
  },
  {
    name: "Margherita",
    description: "Go back to where it all began with the classic cheese and tomato base, topped with basil leaves.",
    price: 14,
    image_url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    restaurant: restaurants[1]
  },
  {
    name: "The OG",
    description: "Wagyu patty, cheddar cheese, onion, tomatoes, lettuce, pickles, and our special sauce.",
    price: 8,
    image_url: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80",
    restaurant: restaurants[2]
  },
  {
    name: "Cheese Burger",
    description: "Wagyu patty, cheddar cheese, and our special sauce.",
    price: 6,
    image_url: "https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    restaurant: restaurants[2]
  },
  {
    name: "Bucket of Mussels",
    description: "Mussels served in a bucket with creamy white sauce.",
    price: 12,
    image_url: "https://images.unsplash.com/photo-1600265721436-734abbfe2137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    restaurant: restaurants[3]
  },
  
  
  {
    name: "Cappucino",
    description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
    price: 3,
    image_url: "https://images.unsplash.com/photo-1523942839745-7848c839b661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    restaurant: restaurants[4]
  },{
    name: "Latte",
    description: "Our dark, rich espresso is balanced with steamed milk and topped with a light layer of foam. A perfect milk-forward warm-up.",
    price: 3,
    image_url: "https://images.unsplash.com/photo-1550247611-e651810312fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    restaurant: restaurants[4]
  },{
    name: "Caffe Mocha",
    description: "Espresso combined with mocha sauce and steamed milk.",
    price: 3,
    image_url: "https://images.unsplash.com/photo-1632845407875-10b4d85e6bf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    restaurant: restaurants[4]
  },
  {
    name: "Strawberry Iced with Sprinkles",
    description: "Our Original Glazed Doughnut is dipped in strawberry icing and topped with festive rainbow sprinkles.",
    price: 2,
    image_url: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    restaurant: restaurants[5]
  },
  {
    name: "Original Glazed",
    description: "Our iconic Original Glazed Doughnut filled with chocolate and decorated with a chocolate icing drizzle.",
    price: 2,
    image_url: "https://images.unsplash.com/photo-1550951945-660a41587436?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    restaurant: restaurants[5]
  },
  {
    name: "Angry Whopper",
    description: "Flame-grilled quarter-pound beef patty, topped with melted American cheese, Angry Sauce, crispy angry onion petals, smoked bacon, a slice of melted cheese, shredded iceberg lettuce, and tomato on a sesame seed bun.",
    price: 7,
    image_url: "https://images.unsplash.com/photo-1626483641739-96422935eb93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1735&q=80",
    restaurant: restaurants[6]
  },
  {
    name: "Wicked Whopepr",
    description: "Flame-grilled quarter-pound beef patty, topped with melted American cheese, Angry Sauce, crispy angry onion petals, smoked bacon, a slice of melted cheese, shredded iceberg lettuce, and tomato on a sesame seed bun.",
    price: 9,
    image_url: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    restaurant: restaurants[6]
  },
  {
    name: "Lobster Mac and Cheese",
    description: "7 oz Florida lobster tail sautéed shrimp and scallops in our classic penne mac and cheese, topped with breadcrumbs, baked until golden brown, served in a casserole.",
    price: 28,
    image_url: "https://images.unsplash.com/photo-1615761136599-86165bdf1a83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    restaurant: restaurants[7]
  },
  {
    name: "Lobster Porto Fino",
    description: "7 oz Florida lobster tail topped with sautéed shrimp, scallops, artichokes, tomatoes, scallions, fresh garlic and key lime butter sauce.",
    price: 26,
    image_url: "https://images.unsplash.com/photo-1632389762435-8c53185e40ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80",
    restaurant: restaurants[7]
  },
  {
    name: "Red Velvet Cupcake",
    description: "Red Velvet cupcakes are our customers’ all-time favourite. Deep red vanilla cake with a light taste of chocolate, topped with cream cheese frosting.",
    price: 6,
    image_url: "https://images.unsplash.com/photo-1570806516998-c4c167ee2f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    restaurant: restaurants[8]
  },
  {
    name: "Chocolate Cupcakes",
    description: "Red Velvet cupcakes are our customers’ all-time favourite. Deep red vanilla cake with a light taste of chocolate, topped with cream cheese frosting.",
    price: 5,
    image_url: "https://images.unsplash.com/photo-1448131063153-f1e240f98a72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    restaurant: restaurants[8]
  },
  {
    name: "Dos Toros Burrito",
    description: "A mission style classic with Monterey jack on a steamed tortillas.",
    price: 8,
    image_url: "https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    restaurant: restaurants[9]
  },
  {
    name: "Dos Toros Nachos",
    description: "Served over corn tortilla chips with melted Monterey jack.",
    price: 7,
    image_url: "https://images.unsplash.com/photo-1598726465740-455ad9c05fbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2078&q=80",
    restaurant: restaurants[9]
  },
  {
    name: "Triple Meal Deal",
    description: "Comes with 6 classic wings, 6 boneless wings and 2 tenders in your choice of 3 flavors, with a large fry and 2 dips. (Feeds 2)",
    price: 18,
    image_url: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    restaurant: restaurants[10]
  },
  {
    name: "All-In Bundle",
    description: "16 boneless wings and 6 crispy tenders with up to 4 flavors, large fries, and 3 dips. (Feeds 3-4)",
    price: 22,
    image_url: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    restaurant: restaurants[10]
  },
  {
    name: "Peachy Green Goddess",
    description: "Blackened chicken, peaches, shredded cabbage, raw carrots, cilantro, basil, lemon squeeze, shredded kale, warm quinoa, green goddess ranch dressing.",
    price: 13,
    image_url: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
    restaurant: restaurants[11]
  },
  {
    name: "Farmhouse Caesar",
    description: "Roasted sweet potatoes, spicy broccoli, tomatoes, raw beets, shaved parmesan, parmesan crisps, shredded kale, chopped romaine, lime squeeze, caesar dressing.",
    price: 11,
    image_url: "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1577&q=80",
    restaurant: restaurants[11]
  },
  {
    name: "Grapefruit Jalapeno Soda",
    description: "Sparkling water, cane sugar, lemon juice, elderflowers, cucumber extract, potassium sorbate.",
    price: 6,
    image_url: "https://images.unsplash.com/photo-1591205637480-768c139835e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80",
    restaurant: restaurants[12]
  },
  {
    name: "Cucumber Elderflower Soda",
    description: "Sparkling water, cane sugar, lemon juice, elderflowers, cucumber extract, potassium sorbate.",
    price: 6,
    image_url: "https://images.unsplash.com/photo-1651950515692-a4c6a740b11e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    restaurant: restaurants[12]
  },
])