json.extract! identification, :id, :observation_id, :identifier_id, :guess, :body, :created_at, :updated_at

json.extract! identification.identifier, :username

if identification.identifier.profile_pic.attached?
  json.profilePicURL url_for(identification.identifier.profile_pic)
else
  json.profilePicURL url_for('https://nspect-pro.s3-us-west-1.amazonaws.com/default_pic.png')
end