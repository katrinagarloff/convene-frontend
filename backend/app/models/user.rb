class User < ApplicationRecord
  has_many :locations
  validates :name, :username, presence: true
  validates :username, uniqueness: true
  has_secure_password
    # gem install bcrypt find_by username and then .validate(pw string)
end
