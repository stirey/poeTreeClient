import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Banner from './components/site/Banner';
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Auth from './components/auth/Auth';
// import Body from './components/site/Body';
import HomePage from './components/site/Homepage';
import StudentView from './components/site/StudentView';



function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <Router><StudentView sessionToken={sessionToken} /></Router>
      : <Auth updateToken={updateToken} />)
  }
  
  return (
    <div>
     
      <Header clickLogout={clearToken}/>
      <Banner />
       <Router><HomePage /></Router>
       {protectedViews()}
      <Footer />
      
    </div>
  );
}

export default App;
