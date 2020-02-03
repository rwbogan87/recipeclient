import React from 'react';
import './Auth.css'
import {Container, Row, Col} from 'reactstrap';
import Usercreate from './Usercreate';
import Login from './Login';


const Auth = (props) => {
    return(
        <div className="authdiv">
        <Container className="authmain">
            <Row>
                <Col md="6" className="authcolumn">
                    <Usercreate updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="authcolumn">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Auth;