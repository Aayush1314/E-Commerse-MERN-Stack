import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import { listProducts } from "../actions/productAction";
import Loader from '../components/loader'
import Message from '../components/message'

import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>BEST SELLERS</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error}></Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
