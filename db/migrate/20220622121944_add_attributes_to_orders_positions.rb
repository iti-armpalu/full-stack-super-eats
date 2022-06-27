class AddAttributesToOrdersPositions < ActiveRecord::Migration[6.1]
  def change
    add_column :orders_positions, :quantity, :integer
    add_belongs_to :orders_positions, :food, index: true, foreign_key: true
  end
end
