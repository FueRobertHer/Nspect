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

      const description = user.description.includes(" is a Nspector")
        ? <p className="user-description">{user.username} {user.description}</p>
        : <p className="user-description">{user.description}</p>
      return (
        <div className="user-show-container top-margin">
          <section className="user-section user-profile-sidebar">
            <div className="user-profile-picture">
              <section className="pic-container">
                <img className="profile-pic" src={user.profilePicURL} alt="" />
              </section>
            </div>

            <span className="edit-profile-button">Edit profile</span>

            <ul className="user-sidebar-nav">
              <li className="user-sidebar-nav-item">
                <p>observations</p>
                <p>{user.observations.length}</p>
              </li>
              <li className="user-sidebar-nav-item">
                <p>identification</p>
                <p>{user.identifications.length}</p>
              </li>
              <li className="user-sidebar-nav-item">
                <p>followers</p>
                <p>{user.followers.length}</p>
              </li>
            </ul>
          </section>
          
          <section className="user-section user-profile-details">
            <section>
              <h1 className="profile-name-header">{user.username}</h1>
              <p className="profile-joined-date">Joined: {user.created_at.split("T")[0]}</p>
              {description}
            </section>

            <section>
              <h2 className="user-following-header">Following {user.following.length} People</h2>
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