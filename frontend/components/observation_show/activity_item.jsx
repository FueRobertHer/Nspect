import React from 'react';

class ActivityItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const activity = this.props.activity;

    const comBody = () => (
      <div className="activity-right">
        <div className="activity-right-header border">
          <b>{activity.username}</b> commented
          </div>

        <div className="activity-right-body border">
          <p className="activity-body">{activity.body}</p>
        </div>
      </div>
    )

    const idBody = () => (
      <div className="activity-right">
        <div className="activity-right-header border">
          <b>{activity.username}</b> suggested an ID
          </div>

        <div className="activity-right-body border">
          <p className="guess">{activity.guess}</p>
          <p className="activity-body">{activity.body}</p>
        </div>
      </div>
    )

    const activityBody = (this.props.itemType === 'com')
      ? comBody()
      : idBody()

    return (
      <div className="activity-container">
        <div className="activity-left">
          <img className="profile-icon" src={activity.profilePicURL} alt="" />
          <div className="vert-line"></div>
        </div>

        {activityBody}
      </div>
    )
  }
}

export default ActivityItem