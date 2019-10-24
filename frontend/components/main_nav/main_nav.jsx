import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Nspect } from '../svg/icon_svg';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <nav className="main-nav">
        <NavLink className="home-link" to='/'>
          <Nspect className="nspect-icon" />
          <h1 className="title">Nspect</h1>
        </NavLink>

        <form className="search-container" >
          <input 
          className="search-input"
          type="text"
          placeholder= "Search"
          />

          <span className="search-button">
            <Search className="search-icon" />
          </span>
        </form>

        <NavLink to="/observations" className="main-nav-link explore" activeClassName="active-nav"><div className="nav-link"><b>Explore</b></div></NavLink>
        <NavLink to="/people" className="main-nav-link" activeClassName="active-nav"><div><b>Community</b></div></NavLink>
      </nav>
    )
  }
}

export default MainNav;