import React from 'react';

//= Notes List
export default React.createClass({
  render(){
    const notes = this.props.notes.map((note, index) => {
      //['.value'] is a firebase thing
      return <li key={index}>{note['.value']}</li>
    });

    return (
      <ul>{notes}</ul>
    );
  }
});
