import React from 'react';
import { connect } from 'react-redux';
import { fetchObservation, deleteObservation } from '../../actions/observations_actions';
import { Link } from 'react-router-dom';

import ObservationShow from './observation_show';

const mapSTP = ({session, entities: {observations: {observation}} }) => ({
  observation,
  currentUser: session.id
})


const mapDTP = dispatch => ({
  fetchObservation: id => dispatch(fetchObservation(id)),
  deleteObservation: id => dispatch(deleteObservation(id)),
})

export default connect(
  mapSTP,
  mapDTP
)(ObservationShow)