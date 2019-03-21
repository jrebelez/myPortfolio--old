import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="container" >
       
          <div className="row ">
          
          <i className="fa fa-bars fa-lg " aria-hidden="true"></i>
          
          
          </div>
          </div>
          </div>
       
      
    );
  }
}
export default Header;
