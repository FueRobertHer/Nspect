json.extract! user, :id, :username, :email, :description
json.photoUrl url_for(user.profile_pic)