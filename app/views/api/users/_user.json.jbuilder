json.extract! user, :id, :username, :email, :description, :name, :created_at, :updated_at
json.profilePicURL url_for(user.profile_pic) if user.profile_pic.attached? 