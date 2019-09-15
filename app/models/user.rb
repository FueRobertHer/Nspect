class User < ApplicationRecord
  validates :email, :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token
  
  attr_reader :password
  
  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end
  
  def is_password?(pass)
    BCrypt::Password.new(self.password_digest).is_password?(pass)
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
  
  def self.find_by_creds(username, pass)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(pass) ? user : nil
  end

  has_one_attached :profile_pic

  has_many :observations,
    foreign_key: :observer_id,
    class_name: :Observation

end
