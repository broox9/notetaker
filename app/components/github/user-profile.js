import React from 'react';

//= User profiles
export default React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object
  },

  render(){
    return (
      <section className="profiles-user">
        <h3>Dev: {this.props.username}</h3>
        <p>{this.props.bio.description}</p>
      </section>
    );
  }
});
