import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>PMS</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='/home'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='/listuser'>Users List</MDBNavbarLink>
            <MDBNavbarLink href='/listpolicy'>Policy List</MDBNavbarLink>
            <MDBNavbarLink href='/policytypes'>Policy types</MDBNavbarLink>
            <MDBNavbarLink href='/loginUser'>User</MDBNavbarLink>
            <MDBNavbarLink href='/loginAdmin'>Admin</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}