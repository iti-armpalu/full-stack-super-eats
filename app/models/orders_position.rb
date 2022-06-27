class OrdersPosition < ApplicationRecord
  belongs_to :food

  validates :food, presence: true
  # validates :quantity, presence: true, numericality: { only_integer: true, less_than: 20 }
end
