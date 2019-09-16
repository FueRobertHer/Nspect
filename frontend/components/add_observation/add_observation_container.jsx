import React from 'react';
import { connect } from 'react-redux';
import { addObservation } from '../../actions/observations_actions';
import { Link } from 'react-router-dom';

import AddObservationForm from './add_observation_form';

const mapSTP = ({ session, entities: { users } }) => {
  return ({
    currentUser: users[session.id]
  })
};


const mapDTP = dispatch => ({
  addObservation: observation => dispatch(addObservation(observation)),
})

export default connect(
  mapSTP,
  mapDTP
)(AddObservationForm)