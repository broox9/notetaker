import React from 'react';
import Header from './header.js';

// App Layout
export default React.createClass({
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <section className="app-content">
          {this.props.children}
        </section>
      </div>
    )
  }
});
