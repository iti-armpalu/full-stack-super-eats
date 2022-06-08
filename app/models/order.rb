class Order < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
  has_many :charges

  validates :user, presence: true
  validates :restaurant, presence: true
end
