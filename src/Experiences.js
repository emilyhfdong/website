import React, { Component } from 'react'
import Experience from './Experience.js'
import experienceData from './data/experiences.js'

class Experiences extends Component {
  render() {
    const allExperiences = experienceData.map(exp => (
      <Experience
        organization={exp.organization}
        position={exp.position}
        date={exp.date}
        notes={exp.notes}
      />
      ))
    return (
      <div className="experiences">
        <h3>Experiences</h3>
        {allExperiences}
      </div>
    );
  }
}

export default Experiences;