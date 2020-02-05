import React, {useState} from 'react';
import './Usercreate.css'
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import APIURL from '../../helpers/environment';

// main functions that connect to the form inside the modal
const Usercreate = (props) => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

let handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch(`${APIURL}/user/create`, {
        method: 'POST',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json(),
    ).then(
        console.log('test point 1')
    ).then((data) => {
        console.log(data)
        props.updateToken(data.sessionToken);
    }).then(
        console.log('test point 2')
    )
}

    // form that is embedded inside modal
    return(
        <div>
            <h1>Create an Account</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input type="text" onChange={(e) => setFirstname(e.target.value)} name="firstName" value={firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input type="text" onChange={(e) => setLastname(e.target.value)} name="lastName" value={lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <Input type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Create Account</Button>
            </Form>
        </div>
    )
}
// modal disappears on submit since a token turns off Auth and activates Recipes
const ModalCreate = (props) => {
    // creates state to be toggled with toggle() that is used by a button and on form submission above
    const [modal, setModal] = useState(false);
    // fires modal if its off, closes it on submission since it's passed up as props
    const toggle = () => setModal(!modal);  
    return (
      <div>
        <Button className="userbutton" onClick={toggle}> New User Form </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create New User</ModalHeader>
          <ModalBody>
              {/* above usercreate embedded inside modal here with token passed */}
              <Usercreate updateToken={props.updateToken}/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

export default ModalCreate;



