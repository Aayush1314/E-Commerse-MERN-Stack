import React, { useEffect } from "react";

import {
  Form,
  Image,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction, cartActionDelete } from "../actions/cartAction";

const CartScreen = ({ match, location }) => {
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (match.params.id) {
      dispatch(cartAction(match.params.id, qty));
      console.log(cartItems);
    }
  }, []);

  const itemDeleteHandler = (pId) => {
    dispatch(cartActionDelete(pId))
  }
  const renderedCartItems = cartItems.map((item) => {
    return (
      <Row>
        <ListGroupItem>
          <Row>
            <Col md={3}>
              <Image src={item.image} alt={item.name} fluid rounded />
            </Col>
            <Col md={5}>
              <Link to={`/product/${item.product}`}>
                <h4>{item.name}</h4>
              </Link>
              
                <Row>
                    <Col>
                        <strong>Quantity: </strong>
                    </Col>
                    <Col>
                    <Form.Control
                as="select"
              
                value={item.qty}
                onChange={(e) =>
                  dispatch(cartAction(item.product, e.target.value))
                }
              >
                {[...Array(item.countInStock).keys()].map((x) => {
                  return (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  );
                })}
              </Form.Control>
                    </Col>
                </Row>
                
                
              
              <p>
                <strong>Price: {(item.price * item.qty).toFixed(2)} </strong>
              </p>
              <Button onClick={()=> itemDeleteHandler(item.product)} variant="dark">Delete From Cart</Button>
            </Col>
            <Col md={2}>
              
            </Col>
            <Col>
              {item.countInStock <= 5 ? (
                <p>
                  <strong style={{ color: "red" }}>
                    Only Few Left In Stock
                  </strong>
                </p>
              ) : (
                <p></p>
              )}
            </Col>
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
