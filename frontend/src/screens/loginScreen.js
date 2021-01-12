import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { loginAction } from "../actions/authAction";
import Loader from "../components/loader";
import Message from "../components/message";
const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { loading, error, currUser } = user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(email, password));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : currUser ? (
        history.push("/")
      ) : error ? (
        <Container>
          <Message variant="danger" children={error} />
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={onFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    placeholder="Password"
                  />
                </Form.Group>

                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={onFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    placeholder="Password"
                  />
                </Form.Group>

                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default LoginScreen;
