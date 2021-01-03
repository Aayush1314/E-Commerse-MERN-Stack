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
            <Link to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
            </Link>
            <Link to="/login">
              <Nav.Link>
                <i className="fas fa-user"> </i> Login
              </Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
