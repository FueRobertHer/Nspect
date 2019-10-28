json.extract! identification, :id, :observation_id, :identifier_id, :guess, :body, :created_at, :updated_at

json.extract! identification.identifier, :username, :profile_pic

json.extract! identification.observation, :image