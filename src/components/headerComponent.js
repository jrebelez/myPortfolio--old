import React, { Component } from 'react';
import {Navbar,NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Collapse
} from 'reactstrap';
import logo from '../shared/siglogo.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
<div>
        <Navbar style={{backgroundColor: '#874a9a'}} light expand="md">
          <NavbarBrand href="#intro"><img src={logo} width="200px" height="auto" alt="Josh Rebelez"/></NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#portfolio">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
              
            </Nav>
        </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
