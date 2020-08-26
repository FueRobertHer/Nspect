import { connect } from 'react-redux';
import { fetchObservation, deleteObservation, updateObservation } from '../../actions/observations_actions';
import { addIdentification, fetchIdentifications, deleteIdentification } from '../../actions/identifications_actions';
import { addComment, fetchComments, deleteComment } from '../../actions/comments_action';
import ObservationShow from './observation_show';

const mapSTP = ({session, entities: { observations, identifications, comments, users} }, ownProps) => ({
  observationId: ownProps.match.params.observationId,
  currentUser: users[session.id],
  observation: observations[ownProps.match.params.observationId],
  identifications: identifications,
  comments: comments,
  match: ownProps.match,
  history: ownProps.history
})

const mapDTP = dispatch => ({
  fetchObservation: id => dispatch(fetchObservation(id)),
  deleteObservation: id => dispatch(deleteObservation(id)),
  updateObservation: observation => dispatch(updateObservation(observation)),
  addIdentification: data => dispatch(addIdentification(data)),
  fetchIdentifications: obsId => dispatch(fetchIdentifications(obsId)),
  deleteIdentification: id => dispatch(deleteIdentification(id)),
  addComment: data => dispatch(addComment(data)),
  fetchComments: obsId => dispatch(fetchComments(obsId)),
  deleteComment: id => dispatch(deleteComment(id))
})

export default connect(
  mapSTP,
  mapDTP
)(ObservationShow)