class Identification < ApplicationRecord
  validates :observation_id, :identifier_id, :guess, :body, presence: true

  belongs_to :identifier,
    foreign_key: :identifier_id,
    class_name: :User

  belongs_to :observation,
    foreign_key: :observation_id,
    class_name: :Observation


end
