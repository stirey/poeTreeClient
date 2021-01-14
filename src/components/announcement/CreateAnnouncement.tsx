import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';

const CreateAnnouncement = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm="2"></Col>
            <Col sm="8">    
            <Jumbotron>
                <h4>Hello students!</h4>
                <p className="lead">This week we learned about photosynthesis. Create a post related to key words we learned in this unit. Have fun!</p>
                <hr className="my-2" />
                <p>Have questions about this activity? Send me a message by clicking the button below.</p>
                <p className="lead">
                <Button className="msgMeBtn">Message Me</Button>
                </p>
            </Jumbotron>
            </Col>
          <Col sm="2"></Col> 
        </Row>
      </Container> 
    </div>
  );
};

export default CreateAnnouncement;