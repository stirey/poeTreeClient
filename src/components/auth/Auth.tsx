import React from 'react';
import { Container } from 'reactstrap';
import Login from './Login';

type LoginProps = {
    email: any;
    password: string;
    setEmail: (e: any) => any;
    setPassword: (e: any) => any;
    login: (e: any) => any;
    setLogin: (e: any) => any;
    sessionToken: any;
    updateToken: (e: any) => any;   
    // getToken: any;
    loginToggle: (e:boolean) => boolean;
}


class Auth extends React.Component<LoginProps, {}> {
    constructor(props: LoginProps) {
        super(props)
    }

    render() {
    return (
        <Container className="auth-container">
                    <Login 
                    email={this.props.setEmail}
                    updateToken={this.props.updateToken} />
        </Container>
    )
}
}

export default Auth;