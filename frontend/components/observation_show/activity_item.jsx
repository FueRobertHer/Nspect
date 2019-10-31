import React from 'react';

class ActivityItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    if (this.props.itemType === "com") {
      this.props.deleteComment(this.props.activity.id)
    } else if (this.props.itemType === "id") {
      this.props.deleteIdentification(this.props.activity.id)
    }
  }

  render() {
    const activity = this.props.activity;

    const deleteBtn = (
      <div>
        <span
          onClick={this.handleDelete}
          className="delete-button act-delete"
        >
          Delete
        </span>
      </div>
    )

    const comBody = () => (
      <div className="activity-right">
        <div className="activity-right-header border">
          <p><b>{activity.username}</b> commented</p>
          {(this.props.activity.commenter_id === this.props.currentUser.id) ? deleteBtn : null}
        </div>

        <div className="activity-right-body border">
          <p className="activity-body">{activity.body}</p>
        </div>
      </div>
    )

    const idBody = () => (
      <div className="activity-right">
        <div className="activity-right-header border">
          <p><b>{activity.username}</b> suggested an ID</p>
          
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