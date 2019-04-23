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
       <div id="into" className="introduction">
       <div className="row justify-content-center">
       
      
          <h1> Hello my name is Josh </h1>
          
          <h5> I am a full stack developer that enjoys
              making websites that are intuitive and are well pleasing 
              to the eye </h5>
              
              </div>
              </div>

       </div>
       <div id="aboutme" className= "about">
       <div className="container">
       
       <div className="row">
       <h1> A little about me... </h1>
       
         
      </div>
      </div>
      </div>
      <div className="container">
       <div id="skills" className="introduction">
       <div className="row justify-content-center">
       
      
          <h1> Here is some of my skills... </h1>
          
          <ul>
            <li> Bootstrap </li>
            <li> React/Redux </li>
            <li> Angular </li>
            <li> React Native </li>
            <li> Node.js </li>
            </ul>
              
              </div>
              </div>

       </div>
      </div>
      
     
        
    
    );
  }
}
export default Body;
