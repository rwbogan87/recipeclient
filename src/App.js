import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {  BrowserRouter as Router,} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Recipes from './Components/Recipes/Recipes';
import Navbar from './Components/Navbar/Navbar';
import Menu from './site/Menu';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    console.log(newToken);
    setSessionToken(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const viewConductor=()=>{
    return sessionToken === '' ? <Auth updateToken={updateToken}/> : <Recipes token={sessionToken}/>
  }

  // const welcomeConductor=() => {
  //   return sessionToken === '' ? <Help /> : <Home />
  // }

  return (
    <div className="App">
      <Navbar />
      <br />
      {/* {welcomeConductor()} */}
      <Router>
        <Menu clickLogout={clearToken}/>
      </Router>
      <br />
      
      {viewConductor()}
      <hr/>
    </div>
  );
}

export default App;
