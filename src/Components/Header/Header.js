import React from 'react';
import './Header.css'
import {Navbar, Button, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">LET's GO</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Registration">Registration</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
      
    </Nav>
    <Button href="/Admin">Admin</Button>
  </Navbar>
  <br />
  
</>
        
    );
};

export default Header;