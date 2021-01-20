import React from 'react';
import { Container, Jumbotron, Row } from 'reactstrap';


class Footer extends React.Component  {

    render() {
    return (
        <div>
        <footer>
        <Jumbotron className="footer" fluid>
        <Container fluid>
        <Row>
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
}
export default Footer;

