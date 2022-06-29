class Charge < ApplicationRecord
  belongs_to :order

  validates :checkout_session_id, presence: true
  validates :currency, presence: true
  # validates :total, presence: true
end
