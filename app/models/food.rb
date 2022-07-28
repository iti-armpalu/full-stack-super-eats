class Food < ApplicationRecord
  belongs_to :restaurant
  has_many :orders_positions

  validates :name, presence: true
  validates :description, presence: true, length: { maximum: 2000 }
  validates :price, presence: true
  validates :restaurant, presence: true

end
