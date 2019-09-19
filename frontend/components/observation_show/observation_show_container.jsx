import React from 'react';
import { connect } from 'react-redux';
import { fetchObservation } from '../../actions/observations_actions';
import { Link } from 'react-router-dom';

import ObservationShow from './observation_show';

const mapSTP = ({entities: {observations: {observation}} }) => ({
  observation,
})


const mapDTP = dispatch => ({
  fetchObservation: id => dispatch(fetchObservation(id)),
})

export default connect(
  mapSTP,
  mapDTP
)(ObservationShow)