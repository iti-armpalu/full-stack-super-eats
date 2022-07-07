class AddAttributesToDeliveries < ActiveRecord::Migration[6.1]
  def change
    add_belongs_to :deliveries, :order, index: true, foreign_key: true
    add_belongs_to :deliveries, :user, index: true, foreign_key: true
  end
end
