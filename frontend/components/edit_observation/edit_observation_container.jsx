import { connect } from 'react-redux';
import { fetchObservation, updateObservation } from '../../actions/observations_actions';

import EditObservationForm from './edit_observation_form';

const mapSTP = ({ session, entities: { users, observations } }, { match }) => ({
  userId: session.id,
  currentUser: users[session.id],
  observationId: match.params.observation_id,
  observation: observations[match.params.observation_id]
});


const mapDTP = dispatch => ({
  fetchObservation: observation => dispatch(fetchObservation(observation)),
  updateObservation: observation => dispatch(updateObservation(observation)),
})

export default connect(
  mapSTP,
  mapDTP
)(EditObservationForm)