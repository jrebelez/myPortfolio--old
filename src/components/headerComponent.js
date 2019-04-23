import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, 
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
<div>
        <Navbar style={{backgroundColor: '#4a6f9a'}} light expand="md">
          <NavbarBrand href="#intro">Josh Rebelez</NavbarBrand>
         
        
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#aboutme">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Contact</NavLink>
              </NavItem>
              
            </Nav>
        
        </Navbar>
      </div>
    );
  }
}
export default Header;
