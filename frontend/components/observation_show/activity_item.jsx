import React from 'react';

class ActivityItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAgree = this.handleAgree.bind(this)
  }

  handleDelete() {
    if (this.props.itemType === "com") {
      this.props.deleteComment(this.props.activity.id)
        .then(() => location.reload())
    } else if (this.props.itemType === "id") {
      this.props.deleteIdentification(this.props.activity.id)
        .then(() => location.reload())
    }
  }

  handleAgree(e) {
    this.props.addIdentification({
      observation_id: this.props.activity.observation_id,
      identifier_id: this.props.currentUser.id,
      guess: e.target.parentElement.parentElement.parentElement.children[1].children[0].innerText
    }).then(() => location.reload())
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

    const agreeBtn = (this.props.currentUser !== undefined)
    ? (
      <div>
        <span
          onClick={this.handleAgree}
          className="delete-button act-delete"
        >
          Agree
        </span>
      </div>
    )
    : null

    const comBody_ = () => {
      if (this.props.currentUser !== undefined) {
        (this.props.activity.commenter_id === this.props.currentUser.id) ? deleteBtn : null
      }
    }

    const comBody = () => (
      <div className="activity-right">
        <div className="activity-right-header border">
          <p><b>{activity.username}</b> commented</p>
          {comBody_()}
        </div>

        <div className="activity-right-body border">
          <p className="activity-body">{activity.body}</p>
        </div>
      </div>
    )

    const idBody_ = () => {
      if (this.props.currentUser !== undefined) {
        (this.props.activity.identifier_id === this.props.currentUser.id) ? deleteBtn : null
      }
    }

    const idBody = () => (
      <div className="activity-right">
        <div className="activity-right-header border">
          <p><b>{activity.username}</b> suggested an ID</p>
          {idBody_()}          
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