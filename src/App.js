import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Banner from './components/site/Banner';
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Auth from './components/auth/Auth';
// import Body from './components/site/Body';
import HomePage from './components/site/Homepage';


function App() {
  return (
    <div>
      <HomePage />
      <Header />
      <Banner />
      
      <Footer />
      
    </div>
  );
}

export default App;
