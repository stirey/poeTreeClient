import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Contact = (props) => {
  return (
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
      <Button>Submit</Button>
    </Form>
  );
}

export default Contact;