import React from 'react';
import { Container } from 'reactstrap';


import Login from './Login';

const Auth = (props) => {

    return (
        <Container className="auth-container">
                    <Login updateToken={props.updateToken} />
        </Container>
    )
}

export default Auth;