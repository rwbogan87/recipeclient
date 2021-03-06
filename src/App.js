import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {  BrowserRouter as Router,} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Recipes from './Components/Recipes/Recipes';
import Refresh from './Components/Recipes/Display/Refresh';
import Navbar from './Components/Navbar/Navbar';
import Menu from './site/Menu';
import Footer from './Components/Navbar/Footer'

function App() {

  const [sessionToken, setSessionToken] = useState('');

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
  }

  // on refresh, useeffect grabs localstorage token and uses it, if there is one; prevents token loss
  useEffect(() => {
    if (localStorage.token) {
      setSessionToken(localStorage.token)
    }}, []);

  // logout function
  const clearToken = () => {
    if (sessionToken === '') {
      return null;
    } else {
      localStorage.clear();
      sessionStorage.clear();
      setSessionToken('');
    }}
  

  // displays recipetable through refresh if there is a token
  const viewConductor=()=>{
    return sessionToken === localStorage.getItem('token') ? <Refresh token={sessionToken} /> : <Auth updateToken={updateToken}/>
  }

  // displays recipe create/change buttons if there is a token to do so
  const buttonView=()=>{
  // token being passed into recipes, which is the file that contains the create modal
    return sessionToken === '' ? null : <Recipes token={sessionToken} />
  }

  const menuView=()=>{
    return sessionToken === '' ? null : <Menu clickLogout={clearToken}/>
  }

  return (
    <div className="App">
      <Navbar />
      <br />
      <Router>
      {menuView()}
      </Router>
      <br />
      {buttonView()}
      {viewConductor()}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
