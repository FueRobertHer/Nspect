import React from 'react';
import { Route, withRouter, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HomeRoute } from '../util/route_util';
// 
import SplashContainer from '../components/splash/splash_container';
import MainNavContainer from '../components/main_nav/main_nav_container';
import GreetingContainer from '../components/greeting/greeting_container';
import Logo from '../components/greeting/logo';
import FooterContainer from '../components/footer/footer_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import HomeContainer from '../components/home/home_container';
import UserIndexContainer from '../components/users/user_index_container';
import UserShowContainer from './user_show/user_show_container';
import ObservationsIndexContainer from '../components/observations/observations_index_container';
import ObservationShowContainer from '../components/observation_show/observation_show_container';
import AddObservationContainer from '../components/add_observation/add_observation_container';
import NotFound from '../components/not_found';
// import SearchContainer from './search_container';

const exclusionArray = [
  '/login',
  '/signup',
]

const App = ({ location }) => (
  <div>
    <header className="header">
      <MainNavContainer />
      <Switch>
        <Route exact path="/signup" component={Logo} />
        <Route exact path="/login" component={Logo} />
        <Route path="/" component={GreetingContainer} />

      </Switch>
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <HomeRoute exact path="/" component={SplashContainer} />
      {/* <Route exact path="/" component={SearchContainer} /> */}
    
      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <Route exact path="/people/:userId" component={UserShowContainer} />
      <Route exact path="/people" component={UserIndexContainer} />
      <Route exact path="/observations/upload" component={AddObservationContainer} />
      <Route exact path="/observations/:observationId" component={ObservationShowContainer} />
      <Route exact path="/observations" component={ObservationsIndexContainer} />
      <Route path="/" component={NotFound} />
    </Switch>


    {exclusionArray.indexOf(location.pathname) < 0 && <FooterContainer />}
  </div>
);

export default withRouter(App);