import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Rating from "../components/rating";
import { singleProduct } from "../actions/productAction";
import Loader from "../components/loader";
import Message from "../components/message";

const ProductScreen = ({ match }) => {
  
  const dispatch = useDispatch();
  const oneProduct = useSelector((state) => state.oneProduct);
  const { loading, error, product } = oneProduct;
  
  useEffect(() => {
  
    dispatch(singleProduct(match.params.id));
  
  }, [match, dispatch]);

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
              <ListGroup varient="flush">
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
          </Row>
        </>
      )}
    </>
  
  );
};

export default ProductScreen;
