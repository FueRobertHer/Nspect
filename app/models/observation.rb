class Observation < ApplicationRecord

  belongs_to :user,
    foreign_key: :observer_id,
    class_name: :User

  has_one_attached :image

  # has_many_attached :sounds

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

end
