import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Link} from 'react-router-dom';
import {ButtonGroup,Button, UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
} from 'reactstrap';


const MyNavbar = () => {
return (
<div className='header'>
  <div className='flexme'>
    <div className="test" expand="md">
      <ButtonGroup className="btngroup">
        <Button tag={Link} to="/">Početna</Button>
        <UncontrolledDropdown>
          <DropdownToggle caret>Fauna</DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag={Link} to="/ptice">Retke ptice</DropdownItem>
            <DropdownItem tag={Link} to="/sisari">Sisari</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown>
          <DropdownToggle caret>Flora</DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag={Link} to="/biljke">Biljke</DropdownItem>
            <DropdownItem tag={Link} to="/gljive">Gljive</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <Button tag={Link} to="/o_nama">O nama</Button>
        <Button tag={Link} to="/kontakt">Kontakt</Button>
      </ButtonGroup>
    </div>
  </div>
</div>
)};

export default MyNavbar;