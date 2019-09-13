import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

import Splash from './splash';

const mapSTP = state => ({

})


const mapDTP = dispatch => ({

})

export default connect(
  mapSTP,
  mapDTP
)(Splash)