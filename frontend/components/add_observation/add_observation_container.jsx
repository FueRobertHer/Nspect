import { connect } from 'react-redux';
import { addObservation } from '../../actions/observations_actions';
import { addIdentification } from '../../actions/identifications_actions';

import AddObservationForm from './add_observation_form';

const mapSTP = ({ session, entities: { users } }, { history }) => ({
  currentUser: users[session.id],
  history
});


const mapDTP = dispatch => ({
  addObservation: observation => dispatch(addObservation(observation)),
  addIdentification: identification => dispatch(addIdentification(identification))
})

export default connect(
  mapSTP,
  mapDTP
)(AddObservationForm)