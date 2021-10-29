import React from "react";
import axios from "axios";
import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";


export default function LoginPage(props) {

    const [login, setLogin] = useState({});
    const [validated, setValidated]= useState(false)
    const noText = 'This field cannot be left empty'
    let history = useHistory()

    const handleChange = e => setLogin(prevState => {
        console.log(e.target.id, e.target.value)

        return { ...prevState, [e.target.id]: e.target.value }
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('user logged in')
        console.log(login)


        // run axios call sending all the user data to log in 
        axios.post('https://aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/login', {
            email: login.email,
            password: login.password
        })
            .then(function (response) {
                console.log(response);
                const token = response.data.data.token

                localStorage.setItem('token', token)

                console.log(token)
                props.setToken(token)
            })
            .catch(function (error) {
                console.log(error);
            });
            const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);

    }

    const signUpBtn = () => {
        history.push('/SignUp')
    }


    return (

        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>Login</h1>
                    <Form validated={validated} onSubmit={handleSubmit}>
                        <Form.Group onChange={handleChange} value={login.loginEmail || ""}>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control required id='email' type="text" placeholder="example@website.com" />
                            <Form.Control.Feedback>Thanks!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>{noText}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={login.loginPassword || ""}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control required id='password' type="text" placeholder="Create a password" />
                            <Form.Control.Feedback>Thanks!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>{noText}</Form.Control.Feedback>
                        </Form.Group>
                        <Col className='d-flex justify-content-center'>
                            <Button type='button' className='btn btn-primary mt-3 me-3' onClick={signUpBtn}>Sign Up</Button>
                            <Button type='submit' className='btn btn-success mt-3'>Login</Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}