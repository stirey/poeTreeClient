import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

type ContactProps = {
  name: string;
  email: string;
  message: string;
}

class Contact extends React.Component<ContactProps, {}> {
  constructor(props: ContactProps) {
    super(props)
  }

  render() {
  return (
    <Container id="contactForm">
    <Form>
      <FormGroup>
        <Label>First Name</Label>
        <Input 
        className="name" 
        name="name" 
        id="contactname" 
        placeholder="enter first name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input 
        className="email"  
        name="email" 
        id="exampleEmail" 
        placeholder="enter your email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Message</Label>
        <Input 
        className="message"
        name="message" 
        id="contactmessage" 
        placeholder="enter your message here..." />
      </FormGroup>
      <Button type="submit" id="contactbtn">Submit</Button>
    </Form>
    </Container>
  );
}
}

export default Contact;