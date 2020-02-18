class Observation < ApplicationRecord

  belongs_to :observer,
    foreign_key: :observer_id,
    class_name: :User

  has_one_attached :image

  # has_many_attached :sounds

  has_many :comments,
    foreign_key: :observation_id,
    class_name: :Comment

  has_many :commenters,
    through: :comments,
    source: :commenter

  has_many :identifications,
    foreign_key: :observation_id,
    class_name: :Identification

  has_many :iders,
    through: :identifications,
    source: :identifier

  has_many :favorites,
    foreign_key: :observation_id,
    class_name: :Favorite

  has_many :favorited_by,
    through: :favorites,
    source: :user


  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  # def highestRatedId
  #   def count(obj)
  #     obj.keys
  #   end
  # end

end
