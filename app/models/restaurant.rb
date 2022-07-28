class Restaurant < ApplicationRecord
  belongs_to :user
  has_many :foods
  has_many :orders
  has_many :orders_positions

  validates :name, presence: true, length: { maximum: 70 }
  validates :address, presence: true, length: { maximum: 200 }
  validates :city, presence: true, length: { maximum: 200 }
  validates :country, presence: true, length: { maximum: 200 }
  validates :restaurant_type, presence: true, length: { maximum: 200 }
  validates :opening_time, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 12 } # AM or PM
  validates :closing_time, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 12 } # AM or PM
  validates :delivery_time, presence: true
  validates :delivery_fee, presence: true, numericality: { only_integer: true, less_than: 10 } #in USD
  validates :user, presence: true

  scope :filter_by_type, -> (restaurant_type) { where restaurant_type: restaurant_type }
  
end
