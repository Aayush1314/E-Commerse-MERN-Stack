import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">Shop.IO</Navbar.Brand>
          </Link>
          <Nav className="ml-auto">
            
              <Nav.Link>
                <Link style={{color:"white"}} to="/cart">
                  <i className="fas fa-shopping-cart"></i> Cart
                </Link>
              </Nav.Link>
            
            <Nav.Link>
              <Link style={{color:"white"}} to="/login">  
                <i className="fas fa-user"> </i> Login
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
