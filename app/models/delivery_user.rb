class DeliveryUser < ApplicationRecord
  # has_many :sessions

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, length: { minimum: 5, maximum: 500 }
  validates :password, presence: true, length: { minimum: 8, maximum: 64 }
  validates :phone_number, presence: true
  
  validates_uniqueness_of :email

  after_validation :hash_password

  private

  def hash_password
    self.password = BCrypt::Password.create(self.password)
  end
end
