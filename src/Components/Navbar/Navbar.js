import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor (props) {
    super(props);

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  onMenuItemClick(e) {
    var links = document.getElementsByClassName("navbar-link");
    var i;
    for (i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }

    e.currentTarget.classList.add('active');
  }

  render () {
    return (
      <div className="navbar">
        <ul id="menu-list" className="navbar-content menu menu-hover-lines">
          <li onClick={this.onMenuItemClick} className="navbar-link active">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li onClick={this.onMenuItemClick} className="navbar-link">
            <Link to="/education-and-skills" className="navbar-link">Education and Skills</Link>
          </li>
          <li onClick={this.onMenuItemClick} className="navbar-link">
            <Link to="/work" className="navbar-link">Past Work Experiences</Link>
          </li>
          <li onClick={this.onMenuItemClick} className="navbar-link">
            <Link to="/about" className="navbar-link">About Me</Link>
          </li>
        </ul>
      </div>
    );
  }
}


export default Navbar;