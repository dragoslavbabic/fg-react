import React, {Component} from 'react';
import {Dropdown, ButtonGroup, Button, DropdownButton,Navbar} from 'react-bootstrap';
import Navitem from './Navitem';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyNavbar extends Component {
  render() {
    return (
      <Navbar>
        <ButtonGroup>
          <Button>Početna</Button>
          <DropdownButton
            as={ButtonGroup}
            title="Fauna"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Retke ptice</Dropdown.Item>
            <Dropdown.Item eventKey="2">Sisari</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            as={ButtonGroup}
            title="Flora"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="3">Biljke</Dropdown.Item>
            <Dropdown.Item eventKey="4">Gljive</Dropdown.Item>
          </DropdownButton>

          <Button>O nama</Button>
          <Button>Kontakt</Button>
        </ButtonGroup>
      </Navbar>
    );
  }
}

export default MyNavbar;
