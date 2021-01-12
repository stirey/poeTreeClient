import React, { useState } from 'react';
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


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarText>PoeTree</NavbarText>
          <NavItem><img id="tree" className="tree" src={tree} alt="tree icon" /></NavItem>
            <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact" onClick={props.contact}>Contact</NavLink>
                  </NavItem>

                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>About</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/theapp" onClick={props.theapp}>The App</DropdownItem>
                    <DropdownItem href='/themaker' onClick={props.themaker}>The Maker</DropdownItem>
                    <DropdownItem href='/forteachers' onClick={props.forteachers}>Teacher Resources</DropdownItem>
                    <DropdownItem href='/artsintegration' onclick={props.artsintegration}>Arts Integration</DropdownItem>
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

export default Header;