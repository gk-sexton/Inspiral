class Collection < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :title. uniqueness: { scope: :user_id,
    message: 'You\'re already using that collection name!'}

  belongs_to :user
  
end
