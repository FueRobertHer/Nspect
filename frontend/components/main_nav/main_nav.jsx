import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Search, Nspect } from '../svg/icon_svg';


class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {taxa: ''};

    this.handleSearch = this.handleSearch.bind(this)

  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value.toLowerCase()
    });
  }

  handleSearch(e) {
    e.preventDefault()
    this.props.updateFilter('taxa', this.state.taxa)
    this.props.history.push('/observations')
  }

  render() {
    return (
      <nav className="main-nav">
        <NavLink className="home-link" to='/'>
          <Nspect className="nspect-icon" />
          <h1 className="title">Nspect</h1>
        </NavLink>

        <form className="search-container" onSubmit={this.handleSearch}>
          <input 
          className="search-input"
          type="text"
          placeholder= "Search"
          onChange={this.update('taxa')}
          />

          <span className="search-button" onClick={this.handleSearch}>
            <Search className="search-icon" />
          </span>
        </form>

        <NavLink to="/observations" className="main-nav-link explore" activeClassName="active-nav"><div className="nav-link"><b>Explore</b></div></NavLink>
        <NavLink to="/people" className="main-nav-link" activeClassName="active-nav"><div><b>Community</b></div></NavLink>
      </nav>
    )
  }
}

export default withRouter(MainNav);