class Identification < ApplicationRecord
  validates :observation_id, :identifier_id, :guess, presence: true

  belongs_to :identifier,
    foreign_key: :identifier_id,
    class_name: :User

  has_one :observation,
    foreign_key: :observation_id,
    class_name: :Observation

    
end
