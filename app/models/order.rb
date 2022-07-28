class Order < ApplicationRecord
  belongs_to :user
  belongs_to :delivery_user, class_name: 'User', foreign_key: 'delivery_user_id'
  belongs_to :restaurant
  has_many :charges

  validates :user, presence: true
  validates :restaurant, presence: true
  
  def is_paid?
    self.charges.pluck(:complete).include?(true)
  end
end
