import React, { Component } from 'react';
import './ContactFooter.css';

class ContactFooter extends Component {
  render() {
    return (
      <div id="contact-footer">
        <div id="contact-links">
          <a className="contact-link" href="https://www.linkedin.com/in/jean-philippe-lemieux-b62b77b0" target="_blank" rel="noopener noreferrer">
            <i className="contact-link__icon fa fa-linkedin-square fa-3x" aria-hidden="true"/>
            <span className="contact-link__text">LinkedIn</span>
          </a>
          <a className="contact-link" href="https://github.com/jplemieux66" target="_blank" rel="noopener noreferrer">
            <i className="contact-link__icon fa fa-github-square fa-3x" aria-hidden="true"/>
            <span className="contact-link__text">GitHub</span>
          </a>
          <a className="contact-link" href="mailto:jean-philippe.lemieux@polymtl.ca">
            <i className="contact-link__icon fa fa-envelope fa-3x" aria-hidden="true"/>
            <span className="contact-link__text">Email</span>
          </a>
        </div>
      </div>
    );
  }
}

export default ContactFooter;