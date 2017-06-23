import React, { Component } from 'react';
import Navbar from './../Navbar/Navbar';
import ContactFooter from './../ContactFooter/ContactFooter';
import './MainContainer.css';

class MainContainer extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
        <ContactFooter />
      </div>
    );
  }
}


export default MainContainer;