import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  
function Header() {
  return (
    <div> <MDBNavbar light bgColor='secondary'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/6090/6090979.png'
          height='30'
          alt=''
          loading='lazy'
        />
        Counter App
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header