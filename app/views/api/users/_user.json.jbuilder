json.extract! user, :id, :username, :email, :description, :name, :created_at, :updated_at
if user.profile_pic.attached?
  json.profilePicURL url_for(user.profile_pic) 
else
 json.profilePicURL url_for('https://nspect-pro.s3-us-west-1.amazonaws.com/default_pic.png')
end

json.observations user.observations.pluck(:id)
