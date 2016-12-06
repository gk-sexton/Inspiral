class User < ActiveRecord::Base
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :session_token, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many collections, dependent: :destroy
  has_many subscriptions, dependent: :destroy 



  def self.find_by_credentials(user_params)
    user = User.find_by(username: user_params[:username])
    (user && user.password_is?(password)) ? user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def reset_session_token
    self.session_token = new_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def new_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= new_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_token
    end
  end

end
