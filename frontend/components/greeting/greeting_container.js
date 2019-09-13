import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDTP = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapSTP,
  mapDTP,
)(Greeting);