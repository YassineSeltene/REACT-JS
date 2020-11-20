import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Composantform () {
    
    return (
      <div className="mondiv">
      <Container>
      <Form>
      <Row>
        <Col md>
      <Form.Group controlId="formBasicName">
    <Form.Label>FullName</Form.Label>
    <Form.Control className="contenu" type="text" placeholder="John Doe" />
  </Form.Group>
  </Col >
 <Col md>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className="contenu" type="email" placeholder="Example@email.com" />
    <Form.Text className="text-muted">
      <p>Nous n'allons pas partager votre adresse email.</p>
    </Form.Text>
  </Form.Group>
  </Col>
  </Row>  
  </Form>
  <Button variant="success"> submit </Button>
  </Container>
    </div>
      );
    }


export default Composantform;