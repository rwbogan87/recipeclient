import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Help from './Help';
import {Button, Container} from 'reactstrap';
import './Menu.css';


// simple menu routes to switch between About and Help without affecting rendered receipes
const Menu = (props) => {
    return (
        <Container className="menu">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/Home">About</Link></li>
                <li><Link to="/Help">Help</Link></li>
                <li className="buttonli"><Button onClick={props.clickLogout} className="logoutbutton">Logout</Button></li>
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/Home"><Home /></Route>
                <Route exact path="/Help"><Help /></Route>
            </Switch>
        </div>
        </Container>
)   }

    export default Menu;