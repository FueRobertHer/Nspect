import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const greet = () => (
    <nav className="navtabs">
      <ul className="header-nav">
        <li>
          <button>
            upload
          </button>
        </li>

        <li>
          messages
        </li>

        <li>
          comments
        </li>

        <li>
          <div className="dropdown">
            <button onClick={logout} className="header-button">Log out</button>
          </div>
        </li>
      </ul>

    </nav>
  )
 
  const links = () => (
    <ul className="navtabs login-signup">
      <b><Link to='/login'>Log In</Link></b> or <b><Link to='/signup'>Sign Up</Link></b>
    </ul>
  )

  return currentUser ? greet() : links()
  
};

export default Greeting;