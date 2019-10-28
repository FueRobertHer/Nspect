json.extract! user, :id, :username, :email, :description, :name, :created_at, :updated_at
if user.profile_pic.attached?
  json.profilePicURL url_for(user.profile_pic) 
else
 json.profilePicURL url_for('https://nspect-pro.s3-us-west-1.amazonaws.com/default_pic.png')
end

json.observations user.observations.pluck(:id)

json.comments user.comments.pluck(:id)

json.identifications user.identifications.pluck(:id)

json.favorites user.favorited_obs.pluck(:id)

json.following user.subscribed_to.pluck(:id)

json.followers user.followers.pluck(:id)
