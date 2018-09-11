class User < ApplicationRecord
  has_many :locations
  validates :name, :user_name, presence: true
  validates :user_name, uniqueness: true
  has_secure_password
  # gem install bcrypt
end
