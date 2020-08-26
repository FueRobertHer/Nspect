import { connect } from 'react-redux';
import { fetchObservations } from '../../actions/observations_actions';
import { fetchUser } from '../../actions/users_actions';

import Home from './home';

const mapSTP = ({session, entities: {observations, users}}) => ({
  userId: session.id,
  user: users[session.id],
  observations : observations,
})


const mapDTP = dispatch => ({
  fetchObservations: userId => dispatch(fetchObservations(userId)),
  fetchUser: id => dispatch(fetchUser(id))
})

export default connect(
  mapSTP,
  mapDTP
)(Home)
