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

            <button>Edit profile</button>

            <ul className="user-sidebar-nav">
              <li className="user-sidebar-nav-item">observations</li>
              <li className="user-sidebar-nav-item">identification</li>
              <li className="user-sidebar-nav-item">followers</li>
            </ul>
          </section>
          
          <section className="user-section user-profile-details">
            <section>
              <h1>{user.username}</h1>
              <h2>{user.created_at}</h2>
              <p>{user.username} {user.description}</p>
            </section>

            <section>
              <h2>Following People</h2>
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