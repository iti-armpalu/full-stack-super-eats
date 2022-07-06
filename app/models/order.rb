class Order < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
  belongs_to :delivery_user
  has_many :charges

  validates :user, presence: true
  validates :restaurant, presence: true
  validates :delivery_user, presence: true
  
  def is_paid?
    self.charges.pluck(:complete).include?(true)
  end
end
