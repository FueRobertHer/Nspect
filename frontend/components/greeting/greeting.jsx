import React from 'react';
import { Link } from 'react-router-dom';
import { UpArrow, Comment, MailBlack } from '../svg/icon_svg';

const Greeting = ({currentUser, logout}) => {
  const greet = () => (
    <nav className="user-nav">
      <Link to='/observations/upload'>
        <button className="upload-button">
          <UpArrow className="up-arrow" />
          Upload
        </button>
      </Link>
      <ul className="user-nav user-nav-list">
        <li className="user-nav-item">
          <MailBlack />
        </li>

        <li className="user-nav-item">
          <Comment />
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