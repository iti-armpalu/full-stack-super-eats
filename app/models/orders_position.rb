class OrdersPosition < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :user

  validates :food, presence: true
  validates :restaurant, presence: true
  validates :user, presence: true
  # validates :quantity, presence: true
end
