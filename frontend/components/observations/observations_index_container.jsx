import React from 'react';
import { connect } from 'react-redux';
import { fetchObservations } from '../../actions/observations_actions';
import { Link } from 'react-router-dom';

import ObservationsIndex from './observations_index';

const mapSTP = ({ entities: { observations } }) => ({
  observations: Object.values(observations),
})


const mapDTP = dispatch => ({
  fetchObservations: () => dispatch(fetchObservations()),
})

export default connect(
  mapSTP,
  mapDTP
)(ObservationsIndex)