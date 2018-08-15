import React, { Component } from 'react';
import educationData from './data/education.js'
import Education from './Education.js'

class EducationList extends Component {
  render() {
    const allEducation = educationData.map(education => (
      <Education
        school={education.school}
        program={education.program}
        year={education.year}
        notes={education.notes}
      />
      ))
    return (
      <div className="education-list">
        <p>{this.props.group}</p>
        <ul>
          {allEducation}
        </ul>
      </div>
    );
  }
}

export default EducationList;