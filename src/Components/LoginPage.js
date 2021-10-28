import React from "react";
import axios from "axios";
import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";


export default function LoginPage() {

    const [login, setLogin] = useState({});

    const handleChange = e => setLogin(prevState => {
        console.log(e.target.id, e.target.value)

        return { ...prevState, [e.target.id]: e.target.value }
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('user logged in')
        console.log(login)
        // ran axios call sending all the user data
       axios.all([
           axios.post('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/login'),
           axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/user', {
               name: login.loginEmail,
               pass: login.loginPassword

           })
       ])
       .then(axios.spread((results1, results2) => {
           console.log(results1, results2)
       }))
        // save data to localstorage
    }



    return (

        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>Login</h1>
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group onChange={handleChange} value={login.loginEmail || ""}>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control id='loginEmail' type="text" placeholder="example@website.com" />
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={login.loginPassword || ""}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control id='loginPassword' type="text" placeholder="Create a password" />
                        </Form.Group>
                        <Col className='d-flex justify-content-center'>

                        <Button type ='button' className='btn btn-primary mt-3 me-3'>Sign Up</Button>
                        <Button type ='submit' className='btn btn-success mt-3'>Login</Button>
                </Col>
                    </Form>
            </Col>
        </Row>
            </Container >

    )
}