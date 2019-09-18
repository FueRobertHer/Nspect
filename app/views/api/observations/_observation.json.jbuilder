json.extract! observation, :id, :observer_id, :lat, :lng, :datetime, :description, :created_at, :updated_at
json.imageURL url_for(observation.image) if observation.image.attached?