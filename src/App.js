import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// import About from './components/site/About';
import Banner from './components/site/Banner';
// import Contact from './components/site/Contact';
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Auth from './components/auth/Auth';
// import Body from './components/site/Body';


function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Auth />
      <Footer />
      
    </div>
  );
}

export default App;
