import React from 'react';
import { Container, Jumbotron } from 'reactstrap';


const Footer = (props) => {

    return (
        <div>
        <Jumbotron className="footer" fluid>
        <Container fluid>
          <h4 className="lead"></h4>
        </Container>
        </Jumbotron>
         
        </div>
    )
}

export default Footer;

