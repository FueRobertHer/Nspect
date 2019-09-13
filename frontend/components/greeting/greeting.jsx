import React from 'react';
import { Link } from 'react-router-dom';
import { UpArrow } from '../../util/svg/icon_svg';

const Greeting = ({currentUser, logout}) => {
  const greet = () => (
    <nav className="user-nav">
      <button className="upload-button">
        <UpArrow />
        upload
      </button>
      <ul className="user-nav user-nav-list">
        <li className="user-nav-item">
          messages
        </li>

        <li className="user-nav-item">
          comments
        </li>

        <li className="user-nav-item">
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