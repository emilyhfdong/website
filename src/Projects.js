import React, { Component } from 'react';
import projectData from './data/projects.js'

class Projects extends Component {
  render() {
    const allProjects = projectData.map(project => {
      let allNotes = project.notes.map(note => <p className="note">{note}</p>)
      let technologies = project.technology.map(technology => <p className="technology">{technology}</p>)
      return (
        <div className="project">
          <p className="projectName">{project.name} ({project.year})</p>
          <div className="technologies">{technologies}</div>
          <div className="notes">{allNotes}</div>
        </div>
      )
    })
    return (
      <div className="projects">
        <h3 className="projectsTitle">projects</h3>
        <div className="projectsDiv">
          {allProjects}
        </div>
      </div>
    );
  }
}

export default Projects;