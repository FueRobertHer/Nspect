class Subscription < ApplicationRecord
  validates :subscriber_id, :other_user_id, presence: true

  belongs_to :subscriber,
    foreign_key: :subscriber_id,
    class_name: :User

  belongs_to :user,
    foreign_key: :other_user_id,
    class_name: :User

end
