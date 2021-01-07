import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Rating from "../components/rating";
import { singleProduct } from "../actions/productAction";
import Loader from "../components/loader";
import Message from "../components/message";

const ProductScreen = ({ match,history }) => {
  const dispatch = useDispatch();
  const oneProduct = useSelector((state) => state.oneProduct);
  const { loading, error, product } = oneProduct;
  const [qty, setQty] = useState(1)

  useEffect(() => {
    dispatch(singleProduct(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = ()=>{
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error} />
      ) : (
        <>
          <Link className="btn btn-dark my-3" to="/">
            Go Back
          </Link>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4>{product.name}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    rating={product.rating}
                    revCount={product.numReviews}
                  ></Rating>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        <strong>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out Of Stock"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  
                  {product.countInStock>0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>
                          Qty:
                        </Col>
                        
                        <Col>
                          <Form.Control as="select" value={qty} onChange ={(e)=>{setQty(e.target.value)}}>
                              {
                                [...Array(product.countInStock).keys()].map((x)=>{
                                  return (<option key={x+1} value={x+1}>{x+1}</option>)
                                })
                              }
                          </Form.Control>
                        </Col>

                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button onClick={addToCartHandler} variant="dark" disabled={product.countInStock === 0} className="btn-block" type="button">
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
