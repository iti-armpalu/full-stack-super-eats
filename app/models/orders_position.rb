class OrdersPosition < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant

  validates :food, presence: true
  validates :restaurant, presence: true
  # validates :quantity, presence: true, numericality: { only_integer: true, less_than: 20 }
end
