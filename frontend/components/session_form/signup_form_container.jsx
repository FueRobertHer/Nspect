import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_action';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';


const mapSTP = ({ errors }, ownProps) => ({
  errors: errors.session,
  formType: 'signup',
  otherLink: <Link to='/login'>Log In</Link>
});

const mapDTP = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user)),
});

export default connect(
  mapSTP,
  mapDTP
)(SessionForm);