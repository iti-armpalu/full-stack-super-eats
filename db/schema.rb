# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_22_121944) do

  create_table "charges", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "checkout_session_id"
    t.string "currency"
    t.decimal "amount", precision: 10, scale: 2
    t.boolean "complete", default: false
    t.integer "order_id"
    t.index ["order_id"], name: "index_charges_on_order_id"
  end

  create_table "delivery_users", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.string "phone_number"
  end

  create_table "foods", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.string "description"
    t.integer "price"
    t.string "image_url"
    t.integer "restaurant_id"
    t.index ["restaurant_id"], name: "index_foods_on_restaurant_id"
  end

  create_table "orders", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "subtotal"
    t.integer "user_id"
    t.integer "restaurant_id"
    t.integer "delivery_user_id"
    t.index ["delivery_user_id"], name: "index_orders_on_delivery_user_id"
    t.index ["restaurant_id"], name: "index_orders_on_restaurant_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "orders_positions", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "quantity"
    t.integer "food_id"
    t.integer "restaurant_id"
    t.index ["food_id"], name: "index_orders_positions_on_food_id"
    t.index ["restaurant_id"], name: "index_orders_positions_on_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "country"
    t.string "address_url"
    t.string "restaurant_type"
    t.string "type_icon"
    t.string "price_range"
    t.integer "opening_time"
    t.integer "closing_time"
    t.integer "delivery_time"
    t.integer "delivery_fee"
    t.string "image_url"
    t.integer "user_id"
    t.index ["user_id"], name: "index_restaurants_on_user_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "token"
    t.integer "user_id"
    t.index ["user_id"], name: "index_sessions_on_user_id"
  end

  create_table "trips", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "delivery_user_id"
    t.index ["delivery_user_id"], name: "index_trips_on_delivery_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.string "address"
    t.string "city"
    t.string "country"
    t.string "phone_number"
    t.boolean "delivery_partner"
  end

  add_foreign_key "charges", "orders"
  add_foreign_key "foods", "restaurants"
  add_foreign_key "orders", "delivery_users"
  add_foreign_key "orders", "restaurants"
  add_foreign_key "orders", "users"
  add_foreign_key "orders_positions", "foods"
  add_foreign_key "orders_positions", "restaurants"
  add_foreign_key "restaurants", "users"
  add_foreign_key "sessions", "users"
  add_foreign_key "trips", "delivery_users"
end
