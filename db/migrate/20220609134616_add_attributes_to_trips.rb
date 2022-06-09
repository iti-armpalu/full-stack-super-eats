class AddAttributesToTrips < ActiveRecord::Migration[6.1]
  def change
    add_belongs_to :trips, :delivery_user, index: true, foreign_key: true
  end
end
