import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Banner from './components/site/Banner';
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Auth from './components/auth/Auth';
// import Body from './components/site/Body';
import HomePage from './components/site/Homepage';



function App() {

  
  return (
    <div>
     
      <Header />
      <Banner />
       <Router><HomePage /></Router>
      <Footer />
      
    </div>
  );
}

export default App;
