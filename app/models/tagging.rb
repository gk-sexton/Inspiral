class Tagging < ApplicationRecord
  validates :collection_id, :subscription_id, presence: true
  validates :collection_id, uniqueness: { scope: :subscription_id}

  belongs_to :subscription
  belongs_to :collection

end
