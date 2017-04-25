# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :string           not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :author, :channel, :body, presence: true

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id,
    dependent: :destroy

  belongs_to :channel, dependent: :destroy

end
