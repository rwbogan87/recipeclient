import React from 'react';
import './Auth.css'
import {Container, Row, Col} from 'reactstrap';
import Modalcreate from './Usercreate';
import Login from './Login';

const Auth = (props) => {
    return(
        <div className="authdiv">
        <Container className="authmain">
            <Login updateToken={props.updateToken}/>
            <br />
            <Modalcreate updateToken={props.updateToken}/>
        </Container>
        </div>
    )
}

export default Auth;