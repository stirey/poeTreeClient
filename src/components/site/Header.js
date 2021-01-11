import React, { useState } from 'react';
import acorn from '../assets/acorn.png';
import tree from '../assets/tree.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
        <NavbarBrand href="/">PoeTree</NavbarBrand>
        <NavItem><img id="tree" className="tree" src={tree} alt="tree icon" /></NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  The App
                </DropdownItem>
                <DropdownItem>
                  The Maker
                </DropdownItem>
                <DropdownItem>
                  Arts Integration
                </DropdownItem>
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