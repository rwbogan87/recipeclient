import React, {useState} from 'react';
import './Navbar.css';
import {
  Nav,
  NavItem,
  Button
} from 'reactstrap';

function Navbar(props) {
    return (
       <Nav color="black">
          <NavItem>
          <h1>Recipe Bible</h1>
          
          </NavItem>
       </Nav>
   );
 }

 export default Navbar;