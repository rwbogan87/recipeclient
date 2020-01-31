import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Auth from './Components/Auth/Auth';
import Recipes from './Components/Recipes/Recipes';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  // useEffect(() => {
  //   if (localStorage.getItem('token')){
  //     setSessionToken(localStorage.getItem('token'));
  //     console.log(sessionToken)
  //   }
  // }, [])

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
    return sessionToken === '' ? <Auth updateToken={updateToken}/> : <Recipes token={sessionToken}/>
  }

  // const historyview=()=>{
  //   return sessionToken === '' ? <Auth updateToken={updateToken}/> : <Displayrecipes token={sessionToken}/>
  // }


  return (
    <div className="App">
      <Navbar />
      {viewConductor()}
      <hr/>
    </div>
  );
}

export default App;
