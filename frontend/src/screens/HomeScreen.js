import React, {useState, useEffect} from "react";
import axios from 'axios'
import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";

 
const HomeScreen = () => {
  const [products, setProducts] = useState([])
  
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const {data} = await axios.get("/api/products")
      setProducts(data)
    }
    fetchProducts()
    
  })

  return (
    <>
      <h1>BEST SELLERS</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
