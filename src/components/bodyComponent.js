import React, { Component } from "react";
import {  Container,Card,CardTitle, CardBody } from "reactstrap";
import bootstrap from "../shared/bootstrap.png";
import angular from "../shared/angular.png";
import react from "../shared/react.svg";
import node from "../shared/nodejs.png";

class Body extends Component {
  constructor(props) {
    super(props);
    
  }
  

  render() {
    return (
        
      <div>
      
       <Container>
       <div id="intro" className="introduction">
       <div className="row h-100 align-items-center justify-content-center text-center">
       <div className="col-lg-10 align-self-end">
       <h1 className="text-uppercase text-white font-weight-bold">Josh Rebelez </h1>
       </div>
       <div className="col-lg-8 align-self-baseline">
          <p className="text-white font-weight-light ">Full-Stack Web Developer</p>
         
        
       </div>
       </div>
</div>
       </Container>
       
     <div className="myskills">
      <Container>
       <div id="skills" >
       <div className="row h-100 align-items-center justify-content-center text-center">
       <div className="col-lg-10 align-self-end">
       <h1 className=" font-weight-bold">Here is some Tech I'm familiar with </h1>
       </div>
       </div>

       <div className="row align-items-start">
       <div className="col-md-3 col-sm-6 col-6">
      <img src={bootstrap} width="150px" height="150px" alt="Bootstrap"/>
       
       </div>
       <div className="col-md-3 col-sm-6 col-6">
      <img src={angular} width="150px" height="150px" alt="angular"/>
       </div>
       <div className="col-md-3 col-sm-6 col-6">
      <img src={react} width="150px" height="150px" alt="react"/>
       </div>
       <div className="col-md-3 col-sm-6 col-6">
      <img src={node} width="150px" height="150px" alt="nodejs"/>
       </div>
       </div>
             
              </div>
              </Container>

       </div>

       <div className="myportfolio" id="portfolio">
       <div className="container">
       <div className="row h-100 align-items-center justify-content-center text-center">
       <div className="col-lg-10 align-self-end">
       <h1 className=" font-weight-bold text-white">My Projects</h1>
       </div>
       </div>
       <div className="row align-items-center justify-content-center">
       <Card>
         <CardBody>
       <CardTitle> Busy building, check back soon! </CardTitle>
       </CardBody>
         </Card>

       </div>
       </div>
       </div>

<div className="myskills">
<Container>
<div className="row h-100 align-items-center justify-content-center text-center">
       <div className="col-lg-10 align-self-end">
       <h1 className=" font-weight-bold"> Ready to build something awesome?</h1>
       </div>
       </div>

  </Container>




</div>
       </div>
      
     
        
    
    );
  }
}
export default Body;
