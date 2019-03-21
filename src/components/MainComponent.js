import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Body from './bodyComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
        </div>
    );
  }
}

export default Main;
