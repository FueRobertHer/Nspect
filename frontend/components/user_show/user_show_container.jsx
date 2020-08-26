import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users_actions';

import UserShow from './user_show';

const mapSTP = ({session, entities: { users } }, ownProps) => ({
  userId: ownProps.match.params.userId,
  user: users[ownProps.match.params.userId],
  currentUser: users[session.id]
})

const mapDTP = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
})

export default connect(
  mapSTP,
  mapDTP
)(UserShow)