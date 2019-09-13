import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users_actions';
import { Link } from 'react-router-dom';

import UserIndex from './user_index';

const mapSTP = ({ entities: {users} }) => ({
  users: Object.values(users),
})


const mapDTP = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(
  mapSTP,
  mapDTP
)(UserIndex)