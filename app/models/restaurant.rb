class Restaurant < ApplicationRecord
  belongs_to :user
  has_many :foods


  validates :name, presence: true, length: { maximum: 70 }
  validates :address, presence: true, length: { maximum: 200 }
  validates :city, presence: true, length: { maximum: 200 }
  validates :country, presence: true, length: { maximum: 200 }
  validates :restaurant_type, presence: true, length: { maximum: 200 }
  validates :opening_time, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 12 } # AM or PM
  validates :closing_time, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 12 } # AM or PM
  validates :delivery_time, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 20 } # in minutes
  validates :delivery_fee, presence: true, numericality: { only_integer: true, less_than: 10 } #in USD
  validates :user, presence: true
  
end
