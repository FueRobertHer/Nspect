import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapSTP = ({errors}, ownProps) => ({
  errors: errors.session,
  formType: 'Log in',
  otherLink: <Link to='/signup'>Sign Up</Link>
});

const mapDTP = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user)),
});

export default connect(
  mapSTP,
  mapDTP
)(SessionForm);