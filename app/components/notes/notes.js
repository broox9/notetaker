import React from 'react';
import NotesList from './notes-list.js';
import AddNote from './add-note.js';

//= Notes
export default React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    handleAddNote: React.PropTypes.func.isRequired
  },

  render(){
    return (
      <section className="profiles-notes">
        <h3>Notes for {this.props.username}</h3>
        <AddNote username={this.props.username} handleAddNote={this.props.handleAddNote} />
        <NotesList notes={this.props.notes} />
      </section>
    );
  }
});
