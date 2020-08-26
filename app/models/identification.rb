class Identification < ApplicationRecord
  validates :observation_id, :identifier_id, :guess, presence: true

  belongs_to :identifier,
    foreign_key: :identifier_id,
    class_name: :User

  belongs_to :observation,
    foreign_key: :observation_id,
    class_name: :Observation

  def self.in_observation(observation_id)
    self.where("observation_id = '#{observation_id}'")
  end


end
