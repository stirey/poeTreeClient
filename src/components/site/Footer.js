import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';


const Footer = (props) => {

    return (
        <div>
        <footer>
        <Jumbotron className="footer" fluid>
        <Container fluid>
        <Row>
          <h4 className=""></h4>
        </Row>
        <Row className="footer">
        © Copyright 2021 PoeTree  
        </Row>
        </Container>
        </Jumbotron>
        </footer>
        </div>
    )
}

export default Footer;

