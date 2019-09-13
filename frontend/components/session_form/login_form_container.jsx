import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapSTP = ({errors}) => ({
  errors: errors.session,
  formType: 'Log in',
  otherLink: <Link to='/signup'>Don't have an account? Sign Up</Link>
});

const mapDTP = (dispatch) => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapSTP,
  mapDTP
)(SessionForm);