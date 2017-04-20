# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  image_url       :string
#  current_channel :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# require 'validates_email_format_of'

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
	validates :username, :email, :session_token, uniqueness: true
	validates :password, length: {minimum: 6, allow_nil: true}
  # validates_email_format_of :email, message: 'is not valid'
  validates :email, email_format: { message: 'is not valid' }

  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		user && user.password_is?(password) ? user : nil
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = User.generate_session_token
		self.save!
		self.session_token
	end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

	private

	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end


end
