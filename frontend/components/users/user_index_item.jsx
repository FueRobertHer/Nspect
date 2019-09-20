import React from 'react';
import { Link } from 'react-router-dom';

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return (
      <li className="user-list-item">
        <Link className="user-item-link" to={`/people/${user.id}`} >
          <div className="user-pic-container">
            <img className="user-picture" src={user.profilePicURL} alt=""/>
          </div>

          <div className="item-username-container">
            <b className="item-username">{user.username}</b>
          </div>
        </Link>

      </li>
    )
  }
}

export default UserIndexItem;