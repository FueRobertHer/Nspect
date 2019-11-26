import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users_actions';
import { Link } from 'react-router-dom';

import UserShow from './user_show';

const mapSTP = ({ session, entities: { users: {user} } }) => ({
  user,
  // currentUser: users[session.id]
  currentUser: session.id
})


const mapDTP = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
})

export default connect(
  mapSTP,
  mapDTP
)(UserShow)