import React, { Component } from 'react'

class Experiences extends Component {
  render() {
    const allNotes = this.props.notes.map(note => (<p className="note">{note}</p>))
    return (
      <div className="experience">
        <p className="organization">{this.props.organization}</p>
        <p className="position">{this.props.position} ({this.props.date})</p>
        <div className="experienceNotes">
          {allNotes}
        </div>
      </div>
    );
  }
}

export default Experiences;