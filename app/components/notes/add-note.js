import React from 'react';

//= AddNote
export default React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    handleAddNote: React.PropTypes.func.isRequired
  },

  addNote() {
    const value = this.refs.newNote.value;
    this.props.handleAddNote(value);
    this.refs.newNote.value = '';
  },

  render(){
    return (
      <div className="notes-add-note">
        <input ref="newNote" type="text" />
        <button onClick={this.addNote}>submit</button>
      </div>
    );
  }
});
