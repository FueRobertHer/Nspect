class Observation < ApplicationRecord

  belongs_to :user,
    foreign_key: :observer_id,
    class_name: :User

  has_many_attached :images

  has_many_attached :sounds

end
