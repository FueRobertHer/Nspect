import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {    
    this.props.fetchUser(this.props.match.params.userId)
  }

  render() {
    const user = this.props.user;

    if (user === undefined) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className="user-show-container">
          <section className="user-section user-profile-sidebar">
            <div className="user-profile-picture">profile picture here</div>

            <button className="edit-profile-button">Edit profile</button>

            <ul className="user-sidebar-nav">
              <li className="user-sidebar-nav-item">
                <p>observations</p>
                <p>num</p>
              </li>
              <li className="user-sidebar-nav-item">
                <p>identification</p>
                <p>num</p>
              </li>
              <li className="user-sidebar-nav-item">
                <p>followers</p>
                <p>num</p>
              </li>
            </ul>
          </section>
          
          <section className="user-section user-profile-details">
            <section>
              <h1 className="profile-name-header">{user.username}</h1>
              <p className="profile-joined-date">Joined: {user.created_at.split("T")[0]}</p>
              <p className="user-description">{user.username} {user.description}</p>
            </section>

            <section>
              <h2 className="user-following-header">Following People</h2>
              <section>
                following users index here
              </section>
            </section>
          </section>

        </div>
      )
    }

  }
}

export default UserShow;