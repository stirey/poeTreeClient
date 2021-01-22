import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

type LoginProps = {
    updateToken: (e: string) => void;   
    
}
type LoginState = {
    email: string,
    password: string
}

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props)

        this.state={
            email: "",
            password: ""
        }
    }
    
    // loginToggle =() => {
    //     setLogin(!'login')
    //     //set login to the opposite of whatever login is currently
        
    // }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch( `http://localhost:3000/user/login`, {
            method: 'POST',
            body: JSON.stringify({ 
                user: { 
                    email: this.state.email, 
                    password: this.state.password 
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
        }).then((data) => { //updateToken sends our new token back to App.tsx
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
                        onChange={(e) => {this.setState({email: e.target.value})}} 
                        value={this.state.email}/>
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
                    onChange={(e) => {this.setState({password: e.target.value})}}
                    value={this.state.password} 
                     />
                    </FormGroup> 
                    <br/>
    
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