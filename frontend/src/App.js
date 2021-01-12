import React from 'react'
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartScreen from './screens/cartScreen'
import LoginScreen from './screens/loginScreen'

const App = () => {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen} ></Route>
            <Route path="/cart/:id?" component={CartScreen} ></Route>
            <Route path="/login" component={LoginScreen} ></Route>
            
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
