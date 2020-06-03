import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Badge,
  UncontrolledButtonDropdown,
  Dropdown,
  DropdownMenu,
} from 'react-bootstrap';
import Navitem from './Navitem';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyNavbar extends Component {
  render() {
    return (
      <nav>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <NavLink exact to="/url">
              Menu item
            </NavLink>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    );
  }
}

export default MyNavbar;
