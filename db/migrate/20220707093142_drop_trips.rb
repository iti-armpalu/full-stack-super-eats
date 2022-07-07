class DropTrips < ActiveRecord::Migration[6.1]
  def change
    drop_table :trips
  end
end
