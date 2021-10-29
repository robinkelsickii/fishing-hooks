import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";


export default function SignUp(props) {
    const [data, setData] = useState({});
    const [validated, setValidated] = useState(false);
    const history = useHistory()
    const noText = 'This field cannot be left empty'




    const handleChange = e => setData(prevState => {
        console.log(e.target.id, e.target.value)

        return { ...prevState, [e.target.id]: e.target.value }
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('User Created')
        console.log(data)
        // run axios call sending all the user data
        axios.post('https://port-3000-aincbootcampapi-ianrios529550.preview.codeanywhere.com//api/auth/register', {
            name: data.firstName + " " + data.lastName,
            email: data.email,
            password: data.password,
        })
            .then(function (response) {
                console.log(response);
                // save data to localstorage
                const token = response.data.data.token
                localStorage.setItem('token', token)
                console.log(token)
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
    const loginBtn = () => {
        history.push('/Login')
    }

    return (
        <Container className='text-center'>
            <Row>
                <Col>
                    <h1>Sign Up</h1>
                </Col>
            </Row>
            <Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col className='pt-5 text-center'>
                        <Form.Group onChange={handleChange} value={data.firstName || ""}>
                            <Form.Label >First Name</Form.Label>
                            <Form.Control required id='firstName' type="text" placeholder="Enter First Name" />
                            <Form.Control.Feedback>Thanks!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>{noText}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={data.lastName || ""}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required id='lastName' type="text" placeholder="Enter Last Name" />
                            <Form.Control.Feedback>Thanks!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>{noText}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={data.email || ""}>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control required id='email' type="text" placeholder="example@website.com" />
                            <Form.Control.Feedback>Thanks!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>{noText}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={data.password || ""}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control required id='password' type="text" placeholder="Create a password" />
                            <Form.Control.Feedback>Thanks!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>{noText}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mt-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>

                        <Button type='submit' className='btn btn-primary mt-3 mb-3'>Sign Up</Button>
                        <div>
                            <p> Already Have an account? Sign In!</p>
                            <Button type='button' className='btn btn-success' onClick={loginBtn}>Login</Button>
                        </div>
                    </Col>
                </Form>
            </Row>
        </Container>
    )
    // console.log(SignUp)
}
