class Observation < ApplicationRecord

  belongs_to :observer,
    foreign_key: :observer_id,
    class_name: :User

  has_one_attached :image

  # has_many_attached :sounds

  has_many :comments
    foreign_key: :observation_id,
    class_name: :Comment

  has_many :identifications
    foreign_key: :observation_id,
    class_name: :Identification


  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

end
