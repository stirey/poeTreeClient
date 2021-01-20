import React, { Component } from 'react';
import acorn from '../assets/acorn.png';
import tree from '../assets/tree.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

type HeaderState = {
  toggle: boolean;
  isOpen: boolean;
  setIsOpen: (e: any) => any;
  theapp: boolean;
  tree: string;
  contact: boolean;
  themaker: boolean;
  forteachers: boolean;
  artsintegration: boolean;
}

class Header extends React.Component<HeaderState,{}> {
  constructor(props: HeaderState) {
    super(props)
  }
  
  toggle() {
    this.props.setIsOpen(!this.props.isOpen)
  }

  render(){
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarText>PoeTree</NavbarText>
          <NavItem><img id="tree" className="tree" src={this.props.tree} alt="tree icon" /></NavItem>
            <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.props.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact" className="contact" onClick={(e) => this.props.contact}>Contact</NavLink>
                  </NavItem>

                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>About</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/theapp" className="theapp" onClick={(e) => this.props.theapp}>The App</DropdownItem>
                    <DropdownItem href='/themaker' className="themaker" onClick={(e) => this.props.themaker}>The Maker</DropdownItem>
                    <DropdownItem href='/forteachers' className="forteachers" onClick={(e) => this.props.forteachers}>Teacher Resources</DropdownItem>
                    <DropdownItem href='/artsintegration'className="artsintegration" onClick={(e) => this.props.artsintegration}>Arts Integration</DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
          <NavbarText>200</NavbarText>
          <NavItem>
              <img id="acorn" className="acorn" src={acorn} alt="acorn icon" />
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default Header;