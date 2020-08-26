import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components only render if not logged in
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

// Components only render if 
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)

const Home = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/home" />
    }
  />
)

const mapSTP = state => (
  {loggedIn: Boolean(state.session.id)}
);


export const AuthRoute = withRouter(
  connect(
    mapSTP,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapSTP,
    null,
  )(Protected)
);

export const HomeRoute = withRouter(
  connect(
    mapSTP,
    null,
  )(Home)
);