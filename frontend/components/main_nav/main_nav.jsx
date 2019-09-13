import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../../util/svg/icon_svg';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="main-nav">
        <Link to='/'><h1 className="title">Nspect</h1></Link>

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

        <Link to="/observations" className="main-nav-link explore"><b>Explore</b></Link>
        <Link to="/people" className="main-nav-link"><b>Community</b></Link>
      </nav>
    )
  }
}

export default MainNav;