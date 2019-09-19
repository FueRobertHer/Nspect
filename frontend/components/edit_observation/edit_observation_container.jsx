import React from 'react';
import { connect } from 'react-redux';
import { fetchObservation, updateObservation } from '../../actions/observations_actions';
import { Link } from 'react-router-dom';

import EditObservationForm from './edit_observation_form';

const mapSTP = ({entities: {observations: {observation}} }) => {
  return ({
    observation,
  })
};


const mapDTP = dispatch => ({
  fetchObservation: observation => dispatch(fetchObservation(observation)),
  updateObservation: observation => dispatch(updateObservation(observation)),
})

export default connect(
  mapSTP,
  mapDTP
)(EditObservationForm)