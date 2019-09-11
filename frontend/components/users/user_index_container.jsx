import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import { Link } from 'react-router-dom';

import UserIndex from './user_index';

const mapSTP = state => ({

})


const mapDTP = dispatch => ({

})

export default connect(
  mapSTP,
  mapDTP
)(UserIndex)