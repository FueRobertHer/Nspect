json.extract! observation, :id, :observer_id, :lat, :lng, :datetime, :description, :created_at, :updated_at, :top_identification
json.imageURL url_for(observation.image) if observation.image.attached?

json.extract! observation.observer, :username

json.identifications observation.identifications.pluck(:id)

json.comments observation.comments.pluck(:id)

json.favorited_by observation.favorited_by.pluck(:id)