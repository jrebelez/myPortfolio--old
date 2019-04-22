import React, { Component } from "react";
import { Button, Jumbotron, Card,CardBody, CardImg, CardTitle } from "reactstrap";


class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        
      <div id="full-screen" >
      
       <div className="container">
       <div className="introduction">
       <div className="row justify-content-center">
       
      
          <h1> Hello my name is Josh </h1>
          
          <h5> I am a full stack developer that enjoys
              making websites that are intuitive and are well pleasing 
              to the eye </h5>
              
              </div>
              </div>

       </div>
       <div className= "about">
       <div className="container">
       
       <div className="row">
       <h1> A little about me... </h1>
         
      </div>
      </div>
      </div>
      <div className="container">
       <div className="introduction">
       <div className="row justify-content-center">
       
      
          <h1> Hello my name is Josh </h1>
          
          <h5> I am a full stack developer that enjoys
              making websites that are intuitive and are well pleasing 
              to the eye </h5>
              
              </div>
              </div>

       </div>
      </div>
      
     
        
    
    );
  }
}
export default Body;
