import React, { Component } from 'react';
import skillsdata from './data/skills.js'
import Skill from './Skill.js'

class Skills extends Component {
  render() {
    const allSkills = skillsdata.map(skill => (
      <Skill
        group={skill.group}
        skillList={skill.skillList}
      />
      ))
    return (
      <div className="Title">
        <h3 className="skillsTitle">Skills</h3>
        {allSkills}
      </div>
    );
  }
}

export default Skills;