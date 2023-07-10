import * as React from "react";

// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Account from "./Account";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import "./style.css";

const Mainnav =()=> {
const usenavigate = useNavigate();
useEffect(()=>{
let email = sessionStorage.getItem('email');
if (email === '' || email === null){
  usenavigate('/login');
}
},[])


  return (
    <Navbar expand="lg" className="mainnav">
      <Container>
        <Navbar.Brand href="/" className="ecom"  style={{ color: 'white' }}>
          E-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/form">Form</Nav.Link>
            <Nav.Link href="/formdetails">Formdetails</Nav.Link>
            <Nav.Link href="/preview">Preview</Nav.Link>
            <Nav.Link href="/login">Logout</Nav.Link>
          </Nav>
          <Account />

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mainnav;
