import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';

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
        // (console.log('test point 1'))
    ).then(
        console.log('test point 1')
    ).then((data) => {
        props.updateToken(data.sessionToken)
    }).then(
        console.log('test point 2')
    )
}


    return(
        <div>
            <h1>Create an Account</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input onChange={(e) => setFirstname(e.target.value)} name="firstName" value={firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(e) => setLastname(e.target.value)} name="lastName" value={lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Create Account</Button>
            </Form>
        </div>
    )
}

export default Usercreate;