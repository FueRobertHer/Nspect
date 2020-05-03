import React from 'react';
import { connect } from 'react-redux';
import { fetchObservations } from '../../actions/observations_actions';

// import { selectUserObs } from '../../reducers/observations_reducer';
import { Link } from 'react-router-dom';

import Home from './home';

const mapSTP = ({session, entities: {observations}}) => ({
  observations : Object.values(observations).filter(observation => observation.observer_id === session.id).reverse()
})


const mapDTP = dispatch => ({
  fetchObservations: () => dispatch(fetchObservations()),
})

export default connect(
  mapSTP,
  mapDTP
)(Home)

export const selectUserObs = (state, user) => {
  // return state.entities.observations.filter(observation => observation.observer_id === user.id)
}