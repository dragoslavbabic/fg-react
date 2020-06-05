import React, {Component} from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

const Pocetna = () => {
  return (
    <div>
      Pocetna
      <div>
        <Navbar className="btn btn-warning" light expand="md">
          <Nav color="info" navbar>
            <NavItem className="hdr">
              <NavLink style={{color: 'white'}}>
                Reactstrap Dropdowns Components
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <UncontrolledDropdown>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={Link} to="/ptice">
              Another Action
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </div>
  );
};

export default Pocetna;
