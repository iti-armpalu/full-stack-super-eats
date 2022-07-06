class AddAttributesToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :subtotal, :integer
    add_belongs_to :orders, :user, index: true, foreign_key: true
    add_belongs_to :orders, :restaurant, index: true, foreign_key: true
    add_belongs_to :orders, :delivery_user, index: true, foreign_key: true
  end
end
