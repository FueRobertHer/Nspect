class Observation < ApplicationRecord

  belongs_to :user,
    foreign_key: :observer_id,
    class_name: :User


end
