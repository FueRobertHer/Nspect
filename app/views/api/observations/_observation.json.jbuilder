json.extract! observation, :id, :lat, :lng, :description, :created_at, :updated_at
json.imagesURL url_for(observation.images)