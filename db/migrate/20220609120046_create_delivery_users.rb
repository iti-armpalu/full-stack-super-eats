class CreateDeliveryUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :delivery_users do |t|

      t.timestamps
    end
  end
end
