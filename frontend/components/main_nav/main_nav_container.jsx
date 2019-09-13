import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainNav from './main_nav';

const mapSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDTP = dispatch => ({
});

export default connect(
  mapSTP,
  mapDTP,
)(MainNav);