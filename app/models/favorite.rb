class Favorite < ApplicationRecord
  validates :user_id, :observation_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :observation,
    foreign_key: :observation_id,
    class_name: :Observation
end
