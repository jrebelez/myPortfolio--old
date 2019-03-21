import React, { Component } from "react";
import { Button, Jumbotron, Card, CardImg, } from "reactstrap";


class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        
      <div className="bodyContent">

      


        <div className="container">
        <div className="row justify-content-center">
        
        <div className="col-6">
        
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tempus consectetur faucibus. Nunc ex mauris, accumsan vel interdum
              sed, pellentesque nec est. Integer ultricies purus quis eleifend
              pulvinar. Praesent vehicula viverra lacus vel hendrerit. Etiam
              ultrices, justo sit amet malesuada aliquet, nisi massa faucibus
              erat, eget sagittis justo ipsum ac mi. Quisque nec mauris feugiat,
              varius ante a, faucibus dui. Nam semper libero mauris, non pretium
              tortor sollicitudin a. Ut vel dictum sem. Nam hendrerit purus in
              lacinia suscipit. Suspendisse varius aliquam nulla, a malesuada
              mauris congue id. In hac habitasse platea dictumst. Proin
              porttitor iaculis odio at feugiat. 
            </p>
            
        </div>
       
        <div className="col-6 ">
    
        <img className=" rounded" src= {require('../shared/me.jpg')} />
        </div>
       
        </div>
    
        
        </div>
    </div>
    
    );
  }
}
export default Body;
