import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import ContactFooter from './../ContactFooter/ContactFooter';
import HomePage from './../HomePage/HomePage';
import AboutPage from './../AboutPage/AboutPage';
import EducationAndSkillsPage from './../EducationAndSkillsPage/EducationAndSkillsPage';
import PreviousWorkPage from './../PreviousWorkPage/PreviousWorkPage';
import './MainContainer.css';

class MainContainer extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage}/>
          <Route path="/education-and-skills" component={EducationAndSkillsPage} />
          <Route path="/work" component={PreviousWorkPage} />
        </div>
        <ContactFooter />
      </div>
    );
  }
}


export default MainContainer;