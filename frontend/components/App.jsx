import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { Link } from 'react-router-dom'
// 
import SplashContainer from '../components/splash/splash_container';
import GreetingContainer from '../components/greeting/greeting_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import FooterContainer from '../components/footer/footer_container';
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
    
    {exclusionArray.indexOf(location.pathname) < 0 && <FooterContainer />}
  </div>
);

export default withRouter(App);