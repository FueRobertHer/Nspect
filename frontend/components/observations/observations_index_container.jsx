import React from 'react';
import { connect } from 'react-redux';
import { fetchObservations } from '../../actions/users_actions';
import { Link } from 'react-router-dom';

import ObservationsIndex from './observations_index';

const mapSTP = ({ entities: { users } }) => ({
  users: Object.values(users),
})


const mapDTP = dispatch => ({
  fetchObservations: () => dispatch(fetchObservations()),
})

export default connect(
  mapSTP,
  mapDTP
)(ObservationsIndex)