import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {  BrowserRouter as Router,} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Recipes from './Components/Recipes/Recipes';
import Refresh from './Components/Recipes/Display/Refresh';
import Navbar from './Components/Navbar/Navbar';
import Menu from './site/Menu';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    console.log(newToken);
    setSessionToken(newToken)
  }

  useEffect(() => {
    if (localStorage.token) {
      setSessionToken(localStorage.token)
    } else {
      return null;
    }
  }, []);

  console.log(typeof sessionToken)

  const clearToken = () => {
    localStorage.clear();
    sessionStorage.clear();
    setSessionToken('');
  }

  const viewConductor=()=>{
    return sessionToken === localStorage.getItem('token') ? <Refresh token={sessionToken} /> : <Auth updateToken={updateToken}/>
  }

  const buttonView=()=>{
    return sessionToken === '' ? null : <Recipes token={sessionToken} />
  }

  console.log(localStorage.token)
  console.log(sessionToken)

  return (
    <div className="App">
      <Navbar />
      <br />
      <Router>
        <Menu clickLogout={clearToken} />
      </Router>
      <br />
      {buttonView()}
      {viewConductor()}
      <hr/>
    </div>
  );
}

export default App;
