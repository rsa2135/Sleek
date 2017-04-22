# == Schema Information
#
# Table name: channels
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string
#  private     :boolean          default("false")
#  is_dm       :boolean          default("false")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, presence: true
  validates :private, :is_dm, inclusion: { in: [true, false] }

  has_many :subscriptions
  has_many :messages
  has_many :users,
    through: :subscriptions,
    source: :user
end
