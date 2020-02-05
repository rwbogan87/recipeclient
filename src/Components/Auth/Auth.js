import React from 'react';
import './Auth.css'
import {Container, Row, Col} from 'reactstrap';
import Modalcreate from './Usercreate';
import Login from './Login';

const Auth = (props) => {
    return(
        <div className="authdiv">
        <Container className="authmain">
            <div className="logindiv">
            <Login updateToken={props.updateToken}/>
            </div>
            <br />
            <div className="creatediv">
            <Modalcreate updateToken={props.updateToken}/>
            </div>
        </Container>
        </div>
    )
}

export default Auth;