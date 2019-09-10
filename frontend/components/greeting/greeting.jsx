import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const greet = () => (
    <nav className="navtabs">
      {/* <h2 className="header-welcome">Welcome {currentUser.username}</h2> */}
      <button>upload</button>
      <ul className="header-nav">
        <li className='fa fa-envelope'></li>
        <li></li>
        <li className="dropdown"></li>
      </ul>
      <button onClick={logout} className="header-button">Log out</button>
    </nav>
  )
 
  const links = () => (
    <ul className="navtabs">
      <Link to='/login'>Log In</Link> or <Link to='/signup'>Sign Up</Link>
    </ul>
  )
  
  return currentUser ? greet() : links()
  
};

export default Greeting;