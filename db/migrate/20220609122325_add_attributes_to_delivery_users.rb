class AddAttributesToDeliveryUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :delivery_users, :first_name, :string
    add_column :delivery_users, :last_name, :string
    add_column :delivery_users, :email, :string
    add_column :delivery_users, :password, :string
    add_column :delivery_users, :phone_number, :string
  end
end
