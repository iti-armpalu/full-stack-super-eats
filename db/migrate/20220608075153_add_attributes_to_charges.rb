class AddAttributesToCharges < ActiveRecord::Migration[6.1]
  def change
    add_column :charges, :checkout_session_id, :string
    add_column :charges, :currency, :string
    add_column :charges, :amount, :decimal, precision: 10, scale: 2
    add_column :charges, :complete, :boolean, default: false
    add_belongs_to :charges, :order, index: true, foreign_key: true
  end
end
