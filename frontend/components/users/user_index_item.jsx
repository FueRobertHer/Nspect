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
        <Link to={`/people/${user.id}`} >
          <b>{user.username}</b>
          <br/>
          
        </Link>

      </li>
    )
  }
}

export default UserIndexItem;