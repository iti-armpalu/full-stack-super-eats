class AddAttributesToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :name, :string
    add_column :restaurants, :address, :string
    add_column :restaurants, :city, :string
    add_column :restaurants, :country, :string
    add_column :restaurants, :address_url, :string
    add_column :restaurants, :restaurant_type, :string
    add_column :restaurants, :type_icon, :string
    add_column :restaurants, :price_range, :string
    add_column :restaurants, :opening_time, :integer
    add_column :restaurants, :closing_time, :integer
    add_column :restaurants, :delivery_time, :integer
    add_column :restaurants, :delivery_fee, :integer
    add_column :restaurants, :image_url, :string
    add_belongs_to :restaurants, :user, index: true, foreign_key: true
  end
end
