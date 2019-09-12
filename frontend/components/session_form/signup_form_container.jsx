import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_action';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';


const mapSTP = ({ errors }, ownProps) => ({
  errors: errors.session,
  formType: 'signup',
  otherLink: <Link to='/login'>Already have an account? Log In</Link>
});

const mapDTP = (dispatch) => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapSTP,
  mapDTP
)(SessionForm);