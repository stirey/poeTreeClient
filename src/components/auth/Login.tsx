import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(true)

    const loginToggle = () => {
        //set login to the opposite of whatever login is currently
        setLogin(!login)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch( `http://localhost:3000/user/${login ? 'login' : 'create'}`, {
            method: 'POST',
            body: JSON.stringify({ 
                user: { 
                    email: email, 
                    password: password 
                } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            if (data.sessionToken) 
            props.updateToken(data.sessionToken);  
        })
    }



    return (
<Container>
    <Row>
        <Col></Col> 
            <Col id="logincard">   
                <Card id="logincard">  
                    <Form className="loginform" onSubmit={handleSubmit}>
                    <Label><h1>{ login ? 'Login' :  'Signup' }</h1></Label>    
                    <FormGroup>   
                    <Label htmlFor="email" className="email">Email</Label>
                    <br/>
                    <Input value={email} type="email" name="email" id="email" placeholder="enter email" onChange={e => setEmail(e.target.value)} />
                    <br/>
                    </FormGroup> 
                    <FormGroup>
                    <Label htmlFor="password"className="password">Password</Label>
                    <br/>
                    <Input type="password" name="password" id="password" placeholder="enter password" value={password} onChange={e => setPassword(e.target.value)} />
                    </FormGroup> 
                    <br/>
                    <Button id="loginbtn" type="button" onClick={loginToggle}>{login ? "Need a login? Click here!" : "Have a login already? Click here!"}</Button>
                    <Button type="submit">Submit</Button>
                    </Form>
                </Card>
            </Col>
        <Col></Col>
    </Row>
    <br />
    <br />
</Container>
    )
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