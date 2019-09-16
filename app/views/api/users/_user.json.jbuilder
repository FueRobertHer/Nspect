json.extract! user, :id, :username, :email, :description, :created_at, :updated_at
if user.profile_pic.attached? 
  json.profilePicURL url_for(user.profile_pic)
end