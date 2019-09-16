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
        <UserIndexItem key={user.id} user={user} />
    )

    return (
      <div className="user-index">
        <section className="space-between">
          <h2 className="title">The People of Nspect</h2>

        </section>

        <div className="user-index ">
          <ul className="user-list">
            {usersList} 
          </ul>
        </div>
      </div>
    )
  }
}

export default UserIndex;