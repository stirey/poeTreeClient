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


type AppStates = {
  email: string;
  setEmail: (e: any) => any;
  password: string;
  setPassword: (e: any) => any;
  login: (e: any) => any;
  setLogin: (e: any) => any;
  sessionToken: any;
  updateToken: (e: any) => any;   
  loginToggle: (e:boolean) => boolean;
}

type AppProps = {
  updateToken: any;
  getToken: any;
  clearToken: any;
  sessionToken: any;

}

// function declarations cannot be typed-always use arrow function expressions.
//React.FunctionComponent is the type I am assigning to App
//defines what we store in App has to be not only a function, but a function that qualifies as a functional component in React
class App extends React.Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      sessionToken: "",
      setEmail: (e) => {
        this.setState({
          email: e
        })
      },
      setPassword: (e) => {
        this.setState({
          password: e
        })
      },

    }
  }

  getToken = () => {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token')});
    }
  }

  updateToken = (newToken: any) => {
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
         <Route exact path="/"><HomePage /></Route>
         <Route><Auth /></Route>
         </Switch>
        </Router>
      <Footer />
      </div>
    </div>
  );
}
}

export default App;
