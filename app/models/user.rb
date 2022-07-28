class User < ApplicationRecord
  has_many :sessions
  has_many :restaurants
  has_many :orders
  has_many :orders_positions
  has_many :deliveries

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, length: { minimum: 5, maximum: 500 }
  validates :password, presence: true, length: { minimum: 8, maximum: 64 }

  validates :address, presence: true
  validates :city, presence: true
  validates :country, presence: true
  
  validates_uniqueness_of :email

  after_validation :hash_password

  private

  def hash_password
    self.password = BCrypt::Password.create(self.password)
  end
end
