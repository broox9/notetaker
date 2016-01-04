import React from 'react';

//= Repos
export default React.createClass({
  propTypes: {
    repos: React.PropTypes.array.isRequired,
    username: React.PropTypes.string.isRequired
  },
  render(){
    const repos = this.props.repos.map((repo, index) => {
      return <li key={index}>{repo}</li>
    });
    return (
      <section className="profiles-repos">
        <h3>Repos for {this.props.username}</h3>
        <ul>
          {repos}
        </ul>
      </section>
    );
  }
});
