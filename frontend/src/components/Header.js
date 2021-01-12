import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {logoutAction} from '../actions/authAction'
const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const { currUser } = user;
  const onLogoutClick=()=>{
    dispatch(logoutAction())
  }
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>Shop.IO</Navbar.Brand>
          </Link>
          <Nav className="ml-auto">
           
              <Link className="navLink" style={{ color: "white" }} to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>
            

           
              {currUser ? (
                <Link className="navLink" onClick={onLogoutClick} style={{ color: "white" }} to="/">
                  <i className="fas fa-user"> </i> Logout
                </Link>
              ) : (
                <Link className="navLink" style={{ color: "white" }} to="/login">
                  <i className="fas fa-user"> </i> Login
                </Link>
              )}
          
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
