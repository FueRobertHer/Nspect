import React from 'react';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    }
    // console.log(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
      .then(users => this.setState(users))
  };

  shuffle(arr) {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  }
 
  render() {
    console.log(this.state)
    const usersList = this.shuffle(this.props.users).map( user =>
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