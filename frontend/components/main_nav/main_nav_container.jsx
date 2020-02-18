import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainNav from './main_nav';
import { updateFilter } from '../../actions/filter_actions';
import { fetchObservations } from '../../actions/observations_actions';



const mapSTP = ({ session, entities: { users, observations } }) => ({
  observations: Object.values(observations),
  currentUser: users[session.id]
});

const mapDTP = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchObservations: () => dispatch(fetchObservations()),
});

export default connect(
  mapSTP,
  mapDTP,
)(MainNav);