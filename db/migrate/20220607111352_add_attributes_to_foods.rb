class AddAttributesToFoods < ActiveRecord::Migration[6.1]
  def change
    add_column :foods, :name, :string
    add_column :foods, :description, :string
    add_column :foods, :price, :integer
    add_column :foods, :image_url, :string
    add_belongs_to :foods, :restaurant, index: true, foreign_key: true
  end
end
