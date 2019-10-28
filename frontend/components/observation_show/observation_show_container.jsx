import React from 'react';
import { connect } from 'react-redux';
import { fetchObservation, deleteObservation } from '../../actions/observations_actions';
import { addIdentification, fetchIdentifications, deleteIdentification } from '../../actions/identifications_actions';
// import { fetchComments, deleteComment } from '../../actions/comments_actions';
import { Link } from 'react-router-dom';

import ObservationShow from './observation_show';

const mapSTP = ({session, entities: {observations: {observation}, identifications, comments} }) => ({
  observation,
  currentUser: session.id,
  identifications: Object.values(identifications) //.filter(identification => identification.observation_id === observation.id),
  // comments: Object.values(comments).filter(comment => comment.observation_id === observation.id)
})


const mapDTP = dispatch => ({
  fetchObservation: id => dispatch(fetchObservation(id)),
  deleteObservation: id => dispatch(deleteObservation(id)),
  fetchIdentifications: () => dispatch(fetchIdentifications()),
  deleteIdentification: id => dispatch(deleteIdentification(id)),
  // fetchComments: () => dispatch(fetchComments()),
  // deleteComment: id => dispatch(deleteComment(id))
})

export default connect(
  mapSTP,
  mapDTP
)(ObservationShow)