import React, { Component } from 'react';
import Summary from './Summary.js'
import Skills from './Skills.js'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class AboutMe extends Component {
  scrollToExperiences = () => {
    const options = {
      smooth: true,
    }
    scroller.scrollTo('experiencesPage', options)
  }
  render() {
    return (
      <div className="aboutMe">
        <Summary/>
        <Skills/>
        <div onClick={this.scrollToExperiences} className="downArrow">
          <i className="fa fa-long-arrow-down animated infinite bounce "></i>
        </div>
      </div>
    );
  }
}

export default AboutMe;