import React, { Component } from 'react'

class Experiences extends Component {
  render() {
    const allNotes = this.props.notes.map(note => (<li>{note}</li>))
    return (
      <div className="experience">
        <p>{this.props.organization}</p>
        <p>{this.props.position}</p>
        <p>{this.props.date}</p>
        <ul className="experience-notes">
          {allNotes}
        </ul>
      </div>
    );
  }
}

export default Experiences;