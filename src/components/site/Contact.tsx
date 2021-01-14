import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const Contact = (props) => {
  return (
    <Container id="contactForm">
    <Form>
      <FormGroup>
        <Label>First Name</Label>
        <Input type="name" name="name" id="contactname" placeholder="enter first name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="enter your email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Message</Label>
        <Input type="textarea" name="message" id="contactmessage" placeholder="enter your message here..." />
      </FormGroup>
      <Button id="contactbtn">Submit</Button>
    </Form>
    </Container>
  );
}

export default Contact;