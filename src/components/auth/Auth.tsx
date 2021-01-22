import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/*
We just need to see if someone is logged in, and if they are we will redirect you here.

*/

// type AuthStates = {
//     email: any;
//     password: string;
//     login: any;
//     sessionToken: any;
//     updateToken: any
//     getToken: any;
//     setEmail: (e: any) => any;
//     setPassword: (e: any) => any;
//     setLogin: (e: any) => any;
//     // loginToggle: any;
// }

type AuthProps = {
    //void just doesn't return anything it just updates
    updateToken: (token: string) => void
}



class Auth extends React.Component<AuthProps,{login: boolean}> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            
            login: true,
        }// when we click this button flip the state of login 
        }
        loginToggle = (e: React.MouseEvent) => {
                this.setState({
                    login: !this.state.login
                })
            }
        
        formFields=() => {
            !this.state.login ? (<Login updateToken={this.props.updateToken}/>):(<div>register placeholder</div>)
        }

    render() {
    return (
        <Container className="auth-container">
            {/* <Router>
            <Switch> */}
                <Route exact path="/user/create">
                    <Login 
                   
                    updateToken={this.props.updateToken} />
                    {this.formFields()}
                    <Button onClick= {(e) => this.loginToggle}>button placeholder</Button>
                </Route>
                {/* <Route exact path="/user/login">
                <Login 
                    // loginToggle={this.state.loginToggle}
                    email={this.state.email}
                    password={this.state.password}
                    login={this.state.login}
                    setEmail={this.state.setEmail}
                    setPassword={this.state.setPassword}
                    setLogin={this.state.setLogin}
                    // getToken={this.state.getToken}
                    sessionToken={this.state.sessionToken}
                    updateToken={this.props.updateToken} />
                </Route>
            </Switch>
            </Router> */}
        </Container>
    )
}
}

export default Auth;