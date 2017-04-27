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
#  creator_id  :integer          not null
#

class Channel < ApplicationRecord
  validates :name, :creator, presence: true
  validates :private, :is_dm, inclusion: { in: [true, false] }

  has_many :subscriptions, inverse_of: :channel

  has_many :messages

  has_many :users,
    through: :subscriptions,
    source: :user,
    dependent: :destroy

  belongs_to :creator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :creator_id
end
