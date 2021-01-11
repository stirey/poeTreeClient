import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';

const Example = (props) => {
  return (
    <Container>
      <Row>
        <Col sm="6">
        
    <Card> 
     <Form className="login">
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input type="username" name="username" id="username" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <Button>Submit</Button>
      </Form>
    </Card>
        </Col>
      </Row>
      </Container>
  );
}

export default Example