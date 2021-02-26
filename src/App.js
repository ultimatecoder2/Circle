import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './templates/headers';
import Home from './templates/Home';
import Footer from './templates/footer';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
