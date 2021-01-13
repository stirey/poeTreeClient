import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import CreateAnnouncement from '../announcement/CreateAnnouncement';

const StudentView = (props) => {

    return (
        <div>
            <div>
            <Container>
                <Row>
                    <Col sm="10"></Col>
                    <Col sm="2"><Button onClick={props.clickLogout}>Logout</Button></Col>
                </Row>
            </Container>
            <br/>
            <CreateAnnouncement />           
            </div>
        </div>
    )
}

export default StudentView;