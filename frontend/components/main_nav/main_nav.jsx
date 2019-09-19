import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Nspect } from '../svg/icon_svg';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <nav className="main-nav">
        <Link className="home-link" to='/'>
          <Nspect className="nspect-icon" />
          <h1 className="title">Nspect</h1>
        </Link>

        <form className="search-container" >
          <input 
          className="search-input"
          type="text"
          placeholder= "Search"
          />

          <button className="search-button">
            <Search className="search-icon" />
          </button>
        </form>

        <Link to="/observations" className="main-nav-link explore"><div className="nav-link"><b>Explore</b></div></Link>
        <Link to="/people" className="main-nav-link"><div><b>Community</b></div></Link>
      </nav>
    )
  }
}

export default MainNav;