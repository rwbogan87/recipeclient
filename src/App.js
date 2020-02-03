import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {  BrowserRouter as Router,} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Recipes from './Components/Recipes/Recipes';
import Navbar from './Components/Navbar/Navbar';
import Help from './site/Help';
import Menu from './site/Menu';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
      console.log(sessionToken)
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    // console.log(newToken);
    setSessionToken(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const viewConductor=()=>{
    return sessionToken === '' ? <Help /> && <Auth updateToken={updateToken}/> : <Recipes token={sessionToken}/>
  }




  return (
    <div className="App">
      <Navbar />
      <Router>
        <Menu clickLogout={clearToken}/>
      </Router>
      {viewConductor()}
      <hr/>
    </div>
  );
}

export default App;
