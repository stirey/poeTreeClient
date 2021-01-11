import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';

const Example = (props) => {
  return (
    <Container className="logincontainer">
        <Row>
        <Col></Col>
        <Col sm="6">
            <Card id="logincard"> 
                <Form className="login">
                <FormGroup>
                <Label className="username">Username</Label>
                <Input type="username" name="username" id="username" placeholder="enter username" />
                </FormGroup>
                <FormGroup>
                <Label className="username">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
                </FormGroup>
                <Button>Submit</Button>
                </Form>
            </Card>
        </Col>
        <Col></Col>
        </Row>
    </Container>
  );
}

export default Example