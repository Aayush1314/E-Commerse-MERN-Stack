import React, { useEffect } from "react";

import {
  Image,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../actions/cartAction";

const CartScreen = ({ match, location }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    //console.log(location)
    console.log(cartItems);
    dispatch(cartAction(match.params.id, 3));
  }, []);

  const renderedCartItems = cartItems.map((item) => {
    return (
      <Row>
        <ListGroupItem>
        <Row>
          <Col md={3}>
            <Image src={item.image} alt={item.name} fluid />
          </Col>
          <Col>
            <h4>{item.name}</h4>
            <p><strong>Quantity: {item.qty}</strong></p>
            <p><strong>Price: {(item.price * item.qty).toFixed(2)} </strong></p>
          </Col>
          {item.countInStock <= 5? <p><strong style={{color:"red"}}>Only Few Left In Stock</strong></p> : '' }
        </Row>  
        </ListGroupItem>
      </Row>
    );
  });
  return (
    <Container>
      <ListGroup variant="flush">{renderedCartItems}</ListGroup>
    </Container>
  );
};

export default CartScreen;
