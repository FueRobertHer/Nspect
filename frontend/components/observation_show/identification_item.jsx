import React from 'react';

class IdentificationItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const identification = this.props.identification;
    return (
      <div className="activity-container">
        <div className="activity-left">
          <img className="profile-icon" src={identification.profilePicURL} alt="" />
          <div className="vert-line"></div>
        </div>

        <div className="activity-right">
          <div className="activity-header-container">
            <div className="activity-right-header border">
              <b>{identification.username}</b> suggested an ID
            </div>
          </div>

          <div className="activity-right-body border">
            <p className="guess">{identification.guess}</p>
            <p className="activity-body">{identification.body}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default IdentificationItem