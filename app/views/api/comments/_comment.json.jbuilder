json.extract! comment, :id, :observation_id, :commenter_id, :body, :created_at, :updated_at

json.extract! comment.commenter, :username

if comment.commenter.profile_pic.attached?
  json.profilePicURL url_for(comment.commenter.profile_pic)
else
  json.profilePicURL url_for('https://nspect-pro.s3-us-west-1.amazonaws.com/default_pic.png')
end