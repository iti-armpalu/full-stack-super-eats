class DropDeliveryUsers < ActiveRecord::Migration[6.1]
  def change
    drop_table :delivery_users
  end
end
