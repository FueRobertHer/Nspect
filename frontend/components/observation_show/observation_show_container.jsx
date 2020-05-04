import { connect } from 'react-redux';
import { fetchObservation, deleteObservation, updateObservation } from '../../actions/observations_actions';
import { addIdentification, fetchIdentifications, deleteIdentification } from '../../actions/identifications_actions';
import { addComment, fetchComments, deleteComment } from '../../actions/comments_action';
import ObservationShow from './observation_show';

function filterToObs(activities, obs) {
  console.log(obs)
  if (!obs || activities.length <= 0) return [];
  return activities.filter(act => {
    act.observation_id === obs.id;
  });
};

const mapSTP = ({session, entities: {observations: {observation}, identifications, comments, users} }) => ({
  currentUser: users[session.id],
  observation,
  identifications: Object.values(identifications),
  comments: Object.values(comments),
})


const mapDTP = dispatch => ({
  fetchObservation: id => dispatch(fetchObservation(id)),
  deleteObservation: id => dispatch(deleteObservation(id)),
  updateObservation: observation => dispatch(updateObservation(observation)),
  addIdentification: data => dispatch(addIdentification(data)),
  fetchIdentifications: () => dispatch(fetchIdentifications()),
  deleteIdentification: id => dispatch(deleteIdentification(id)),
  addComment: data => dispatch(addComment(data)),
  fetchComments: () => dispatch(fetchComments()),
  deleteComment: id => dispatch(deleteComment(id))
})

export default connect(
  mapSTP,
  mapDTP
)(ObservationShow)