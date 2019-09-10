import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
// 
import SplashContainer from '../components/splash/splash_container';
import GreetingContainer from '../components/greeting/greeting_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
// import SearchContainer from './search_container';

const App = () => (
  <div>
    <header className="header">
      <h1>Nspect</h1>
      <GreetingContainer />
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <AuthRoute exact path="/" component={SplashContainer} />
    {/* <Route exact path="/" component={SearchContainer} /> */}

    <footer className="footer">
      <section>
        <ul>
          <li>About</li>
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
      </section>
        
      <section>

      </section>
    </footer>
  </div>
);

export default App;