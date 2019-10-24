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

  has_many :identifications,
    foreign_key: :identifier_id,
    class_name: :Identification

  has_many :obs_ided,
    through: :identifications,
    source: :observation

  has_many :comments,
    foreign_key: :commenter_id,
    class_name: :Comment

  has_many :obs_commented_on,
    through: :comments,
    source: :observation

  has_many :favorites,
    foreign_key: :user_id,
    class_name: :Favorite

  has_many :favorited_obs,
    through: :favorites,
    source: :observation

  has_many :subscriptions,
    foreign_key: :subscriber_id,
    class_name: :Subscription

  has_many :subscribed_to,
    through: :subscriptions,
    source: :user

  has_many :subscribers,
    foreign_key: :other_user_id,
    class_name: :Subscription

  has_many :followers,
    through: :subscribers,
    source: :subscriber

end
