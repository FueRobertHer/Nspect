import React from 'react';
import { Link } from 'react-router-dom';
import { UpArrow, Comment, MailBlack } from '../svg/icon_svg';

const handleUpload = e => {
  e.preventDefault();
  this.props.history.push('/observation/upload')
}

const Greeting = ({currentUser, logout}) => {
  const greet = () => (
    <nav className="user-nav">
      <Link to='/observations/upload'>
        <button className="upload-button" onCLick={handleUpload}>
          <UpArrow className="user-nav-icon"/>
          Upload
        </button>
      </Link>
      <ul className="user-nav user-nav-list">
        <li className="user-nav-item">
          <MailBlack />
          <p className="user-nav-num">0</p>
        </li>

        <li className="user-nav-item">
          <Comment />
          <p className="user-nav-num">0</p>
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