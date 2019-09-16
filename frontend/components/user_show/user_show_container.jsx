import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users_actions';
import { Link } from 'react-router-dom';

import UserShow from './user_show';

const mapSTP = ({ entities: { users: {user} } }) => ({
  user
})


const mapDTP = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
})

export default connect(
  mapSTP,
  mapDTP
)(UserShow)