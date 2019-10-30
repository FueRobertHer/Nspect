import React from 'react';

class AddActivityForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const currentUser = this.props.currentUser || { profilePicURL: 'https://nspect-pro.s3-us-west-1.amazonaws.com/default_pic.png'};
    const pic = currentUser.profilePicURL

    return (
      <div className="activity-container">
        <div className="activity-left">
          <img className="profile-icon" src={pic} alt="" />
        </div>

        <div className="activity-right">
          <div className="activity-right-header border">
            j
          </div>

          <div className="activity-right-body border">
            <form>
              <input type="text" placeholder="Species name" />
              <textarea placeholder="Tell us why..." cols="30" rows="10"></textarea>
            </form>
            {/* <p className="guess">{identification.guess}</p>
            <p className="activity-body">{identification.body}</p> */}
          </div>
        </div>
      </div>
    )
  }
}

export default AddActivityForm