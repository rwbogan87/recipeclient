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
        <div className="menu div">
            <Link to="/Home" className="li">About</Link>
            <Link to="/Help" className="li">Help</Link>
            <Button onClick={props.clickLogout} className="logoutbutton">Logout</Button>
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