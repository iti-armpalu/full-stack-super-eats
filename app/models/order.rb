class Order < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
  has_many :charges
  has_many :deliveries

  validates :user, presence: true
  validates :restaurant, presence: true
  
  def is_paid?
    self.charges.pluck(:complete).include?(true)
  end
end
