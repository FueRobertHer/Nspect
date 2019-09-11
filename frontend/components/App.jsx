import React from 'react';
import { Route, withRouter, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
// 
import SplashContainer from '../components/splash/splash_container';
import GreetingContainer from '../components/greeting/greeting_container';
import FooterContainer from '../components/footer/footer_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import HomeContainer from '../components/home/home_container';
import UserIndexContainer from '../components/users/user_index_container';
import NotFound from '../components/not_found';
// import SearchContainer from './search_container';

const exclusionArray = [
  '/login',
  '/signup',
]

const App = ({ location }) => (
  <div>
    <header className="header">
      <Link to='/'><h1 className="logo">Nspect</h1></Link>
      <GreetingContainer />
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <AuthRoute exact path="/" component={SplashContainer} />
    {/* <Route exact path="/" component={SearchContainer} /> */}
    
    <Switch>
      <Route exact path="/home" component={HomeContainer} />
      <Route exact path="/people" component={UserIndexContainer} />
      {/* <Route exact path='/people/:userId' /> */}
      <Route path='/' component={NotFound} />
    </Switch>


    {exclusionArray.indexOf(location.pathname) < 0 && <FooterContainer />}
  </div>
);

export default withRouter(App);