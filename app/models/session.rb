class Session < ApplicationRecord
  belongs_to :user
  belongs_to :delivery_user

  validates :user, presence: true
  validates :delivery_user, presence: true

  before_validation :generate_session_token

  private

  def generate_session_token
    self.token = SecureRandom.urlsafe_base64
  end
end
