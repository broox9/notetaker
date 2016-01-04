import React from 'react';
import { Router } from 'react-router';
import Repos from './github/repos.js';
import UserProfile from './github/user-profile.js';
import Notes from './notes/notes.js';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

// = Profile
export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState() {
    return {
      notes: ['he is awesome', 'he smells of oakwood and guile', 'he loves fish'],
      bio: {description: 'He is from Ibizia'},
      repos: ['idealog', 'EastWestBowl', 'MyChurchBible']
    };
  },

  handleAddNote(note) {
    //traverse to the notes list that is a child of the username
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(note)
  },

  componentDidMount() {
    this.ref = new Firebase('https://blinding-heat-2607.firebaseio.com');
    const childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },

  componentWillUnmount() {
    this.unbind('notes');
  },

  render() {
    return (
      <div className="profiles">
        <UserProfile username={this.props.params.username} bio={this.state.bio} />
        <Repos username={this.props.params.username} repos={this.state.repos} />
        <Notes
          handleAddNote={this.handleAddNote}
          username={this.props.params.username}
          notes={this.state.notes} />
      </div>
    )
  }
});
