class Subscription < ApplicationRecord
  validates :feed_title, :user_id, :url, presence: true
  validates :feed_title, :url, uniqueness: { scope: :user_id,
    message: 'You\'re already using that subscription or title!'}

  belongs_to :user
  has_many :taggings
  has_many :collections, through: :taggings, source: :collection

end
