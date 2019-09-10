import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapSTP = state => (
  {loggedIn: Boolean(state.session.id)}
);


export const AuthRoute = withRouter(
  connect(
    mapSTP,
    null
  )(Auth)
);