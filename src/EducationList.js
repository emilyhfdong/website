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
      console.log(this.props.group)
    return (
      <div className="educationList">
        <h3 className="educationTitle">education</h3>
        <ul>
          {allEducation}
        </ul>
      </div>
    );
  }
}

export default EducationList;