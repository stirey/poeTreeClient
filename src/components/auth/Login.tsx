import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

type LoginProps = {
    email: string;
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

class Login extends React.Component<LoginProps, {}> {
    constructor(props: LoginProps) {
        super(props)
    }
    // loginToggle =() => {
    //     setLogin(!'login')
    //     //set login to the opposite of whatever login is currently
        
    // }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch( `http://localhost:3000/user/${'login' ? 'login' : 'create'}`, {
            method: 'POST',
            body: JSON.stringify({ 
                user: { 
                    email: this.props.email, 
                    password: this.props.password 
                }
             }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => {
            if(response.status === 200) {
                console.log("login successful");
            } else {
                console.log("login failed");
            } return response.json();
        }).then((data) => {
            this.props.updateToken(data.sessionToken);  
        })
    }


 render() {
    return (
        <div>
<Container>
    <Row>
        <Col></Col> 
            <Col id="logincard">   
                <Card id="logincard">  
                    <Form className="loginform" onSubmit={this.handleSubmit}>
                    <Label><h1>{ 'login' ? 'Login' :  'Signup' }</h1></Label>    
                    <FormGroup>   
                    <Label htmlFor="email" className="email">Email</Label>
                    <br/>
                    <Input  
                        className="email" 
                        name="email" 
                        id="email" 
                        placeholder="enter email" 
                        onChange={(e) => this.props.setEmail(e.target.value)} 
                        value={this.props.email}/>
                    <br/>
                    </FormGroup> 
                    <FormGroup>
                    <Label htmlFor="password"className="password">Password</Label>
                    <br/>
                    <Input 
                    className="password"
                    name="password" 
                    id="password" 
                    placeholder="enter password" 
                    onChange={(e) => this.props.setPassword(e.target.value)}
                    value={this.props.password} 
                     />
                    </FormGroup> 
                    <br/>
                    <Button 
                    id="loginbtn" 
                    className="button" 
                    onClick={(e) => this.props.loginToggle}>{'login' ? "Need a login? Click here!" : "Have a login already? Click here!"}</Button>
                    <Button 
                    type="submit">Submit</Button>
                    </Form>
                </Card>
            </Col>
        <Col></Col>
    </Row>
    <br />
    <br />
</Container>
</div>
    )
}
}


export default Login;



// const handleSubmit = (e) => {
//     e.preventDefault()
//     const url = `http://localhost:3000/user/${login ? 'signin' : 'signup'}`
//     const body = {
//         email: email,
//         password: password
//     } // eslint-disable-next-line
//     fetch(url,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     }).then((response => response.json()
//     ).then((resObj) => {
//         if (resObj.sessionToken)
//         props.updateToken(resObj.sessionToken)
// })}