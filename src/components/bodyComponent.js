import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";


class Body extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values){
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    this.props.postFeedback(values.name, values.email, values.text);
    
    
}

  render() {
    return (
        
      <div id="full-screen" >
      
       <div className="container">
       <div id="into" className="introduction">
       <div className="row justify-content-center">
       
      
          <h1> Hello my name is Josh Rebelez </h1>
          <h3> I am a Full-Stack Web Developer! </h3>
          
              </div>
              </div>

       </div>
       <div id="aboutme" className="about">
       <div className="container">
       
       <div className="row">
       <h1> A little about me... </h1>
       <div className="row">
       <div className="col-6">
      <p> I have recently graduated from Nucamp coding bootcamp in Tacoma, Wa. I have enjoyed learning new 
        concepts and technologies. With this new knowledge I am eager to continue my education in real world 
        experience to make me a more refined developer! </p>
      </div>
      <div className="col-6 ">

        <img className=" rounded" src= {require('../shared/me.jpg')} alt="Josh Rebelez" />
        </div>
      </div>
       
         
      </div>
      </div>
      </div>
     <div className="myskills">
      <div className="container">
       <div id="skills" >
       <div className="row">
       <div className="col-6 ">
          <h1> Here is some of my skills... </h1>
</div>
       </div>   
<div className="row">
          <ul>
            <li><img src= {require('../shared/bootstrap-solid.svg')} alt="Bootstrap" /> </li>
            <li> <img src= {require('../shared/react.svg')} alt="React" /> </li>
            <li> <img src= {require('../shared/angular.png')} alt="Angular" /> </li>
            <li> React Native </li>
            <li> <img src= {require('../shared/nodejs.png')} alt="Nodejs" /> </li>
            </ul>
             </div> 
              </div>
              </div>

       </div>
       <div id="contact" className="about">
       <div className="container">
       <Form onSubmit={(values) => this.handleSubmit(values)}>
       <FormGroup row>
          <Label for="Name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="Name" name="Name" id="Name" placeholder="Your Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Your Feedback</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText"placeholder="Your Feedback" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    
       
       </div>
       </div>
       </div>
      
     
        
    
    );
  }
}
export default Body;
