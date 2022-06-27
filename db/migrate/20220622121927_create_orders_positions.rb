class CreateOrdersPositions < ActiveRecord::Migration[6.1]
  def change
    create_table :orders_positions do |t|

      t.timestamps
    end
  end
end
