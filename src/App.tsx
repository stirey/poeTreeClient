import React, { Component } from 'react';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Banner from './components/site/Banner';
import Footer from './components/site/Footer';
import Auth from './components/auth/Auth';
import HomePage from './components/site/Homepage';
// import StudentView from './components/site/StudentView';

// TOKEN FUNCTIONS- these are usually housed in App.tsx and passed down to child components as needed. 
// gettoken, updatetoken & deleteToken- none of these are going to be state
// updateToken- updates, getToken- returns from local storage, deleteToken-clearsToken


// state: anything we want to change inside this particular component
// we are defining what we want our state to look at. Our state is only going to have one thing (string or null)
type AppStates = {
  sessionToken: string|null,
    
}

// type AppProps = {
//   updateToken: any;
//   getToken: any;
//   clearToken: any;
//   sessionToken: any;

// }

// function declarations cannot be typed-always use arrow function expressions.
//React.FunctionComponent is the type I am assigning to App
//defines what we store in App has to be not only a function, but a function that qualifies as a functional component in React

//Here we are using the type AppStates. this is the gateway into our actual componenet. 
// We don't have props because it is the highest level componenent and nothihng is coming into it. 
//
class App extends React.Component<{}, AppStates> {
  constructor(props: any) {
    super(props)
    this.state = {
      sessionToken: null,
    }
  }

  getToken = () => {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token')});
    }
  }
// this changes the state of this particular token, when someone signs up we want it to change it to their token so they can access their "stuff"
  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({ sessionToken: newToken});
    console.log(newToken);
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: ''});
  }

render() {
  return (
    <div className="App">
     <div className="verticalCenter">
      {/* <Header /> */}
      <Banner />
       <Router>
         <Switch>
         <Route exact path="/">
           <HomePage />
          </Route>
         <Route>
           <Auth 
           //passing props to this child component
           updateToken={this.updateToken}
        
           />
          </Route>
         </Switch>
        </Router>
      <Footer />
      </div>
    </div>
  );
}
}

export default App;
