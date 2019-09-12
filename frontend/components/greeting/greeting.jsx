import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const greet = () => (
    <nav className="navtabs">
      {/* <h2 className="header-welcome">Welcome {currentUser.username}</h2> */}
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
      <Link to='/login'>Log In</Link> or <Link to='/signup'>Sign Up</Link>
    </ul>
  )
  
    const sponsers = () => (
      <ul className="navtabs sponsers">
        
      </ul>
    )

  return currentUser ? greet() : links()
  
};

export default Greeting;