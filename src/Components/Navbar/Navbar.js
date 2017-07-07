import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor (props) {
    super(props);

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onMenuItemClick(e) {
    var links = document.getElementsByClassName("navbar-link");
    var i;
    for (i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }

    e.currentTarget.classList.add('active');
  }

  onToggleClick(e) {
    let menuList = document.getElementById('menu-list');
    let navbarToggle = document.getElementById('navbar-toggle');
    if(menuList.classList.contains('visible')) {
      navbarToggle.classList.remove('toggled');
      menuList.classList.remove('visible');
    } else {
      navbarToggle.classList.add('toggled');
      menuList.classList.add('visible');
    }
  }

  render () {
    return (
      <div className="navbar" id="navbar-main">
        <div className="navbar-toggle-container">
          <div id="navbar-toggle" className="navbar-toggle" onClick={this.onToggleClick}>
            <span></span>
          </div>
        </div>
        <ul id="menu-list" className="navbar-content menu menu-hover-lines">
          <li onClick={this.onMenuItemClick} className="navbar-link active">
            <Link to="/">Home</Link>
          </li>
          <li onClick={this.onMenuItemClick} className="navbar-link">
            <Link to="/education-and-skills">Education and Skills</Link>
          </li>
          <li onClick={this.onMenuItemClick} className="navbar-link">
            <Link to="/work">Past Work Experiences</Link>
          </li>
          <li onClick={this.onMenuItemClick} className="navbar-link">
            <Link to="/about">About Me</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;