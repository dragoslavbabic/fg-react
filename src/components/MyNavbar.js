import React from 'react';
import {ButtonGroup, DropdownButton, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Link} from 'react-router-dom';
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const MyNavbar = () => {
  return (
    <Navbar>
      <ButtonGroup>
        <Link to="/">
          <Button tag={Link} to="/">
            Početna
          </Button>
        </Link>
        <DropdownButton as={ButtonGroup} title="Fauna" id="bg-nested-dropdown">
          <DropdownItem tag={Link} to="/ptice">
            Retke ptice
          </DropdownItem>

          <DropdownItem eventKey="2">Sisari</DropdownItem>
        </DropdownButton>
        <DropdownButton as={ButtonGroup} title="Flora" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="3">Biljke</Dropdown.Item>
          <Dropdown.Item eventKey="4">Gljive</Dropdown.Item>
        </DropdownButton>

        <Button>O nama</Button>
        <Button>Kontakt</Button>
      </ButtonGroup>
    </Navbar>
  );
};

export default MyNavbar;
