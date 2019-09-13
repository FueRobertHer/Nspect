import React from 'react';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchUsers()
  };
 
  render() {
    const usersList = this.props.users.map( user =>
      <ul className="user-list">
        <UserIndexItem key={user.id} user={user} />
      </ul>
    )
    return (
      <div className="user-index">
        <section className="space-between">
          <h2 className="title">The People of Nspect</h2>

        </section>

        <div className="user-index ">
          {usersList}
        </div>
      </div>
    )
  }
}

export default UserIndex;