import React, { useEffect } from 'react';
import UserIndexItem from './user_index_item';

const shuffle = (arr) => {
  let copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let temp = copy[i];
    copy[i] = copy[rand];
    copy[rand] = temp;
  }
  return copy;
}

const UserIndex = ({users, fetchUsers}) => {

  useEffect(() => {
    fetchUsers();
  }, [])

  const usersList = shuffle(users).map( user =>
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

export default UserIndex;