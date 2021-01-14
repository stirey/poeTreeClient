import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron className="bannertext" fluid>
        <Container fluid>
          <h4 className="lead">An app for writing, growth and connection.</h4>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;