import React from 'react';
import './Navbar.css';
import {
  Nav,
  NavItem,
} from 'reactstrap';

// Simple title bar, main functionality is inside main splash and menu
function Navbar() {
    return (
       <Nav color="black">
          <NavItem>
          <h1>Recipe Bible</h1>
          <h3>(Site Under Construction)</h3>
          </NavItem>
       </Nav>
   );
 }

 export default Navbar;