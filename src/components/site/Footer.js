import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';


const Footer = (props) => {

    return (
        <div className="footerDiv">
            <Jumbotron fluid>
                <Container fluid>
                <Row className="footernav">
                    <Col sm="3"></Col>
                    <Col sm="2">
                    <a className="footerLink" href="/">Home</a>
                    </Col>
                    <Col sm="2">
                    <a className="footerLink" href="/about">About</a>
                    </Col>
                    <Col sm="2">
                    <a className="footerLink" href="/contact">Contact</a>
                    </Col>
                    <Col sm="3"></Col>
                </Row>
                <br/>
                <Row className="footerRow">
                © Copyright 2021 PoeTree
                </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Footer;

