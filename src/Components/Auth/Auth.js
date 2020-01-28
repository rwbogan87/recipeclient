import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Usercreate from './Usercreate';
import Login from './Login';


const Auth = (props) => {
    return(
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
    )
}

export default Auth;