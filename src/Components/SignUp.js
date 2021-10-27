import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";

const registerUser = 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/register'
const login = 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/login'
const getLogin = 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/user'
const logOut = 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/logout'

export default function SignUp() {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);



    const handleChange = e => setData(prevState => {
        console.log(e.target.id, e.target.value)

        return { ...prevState, [e.target.id]: e.target.value }
    });
    // useEffect(() => {

    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('User Created')
        console.log(data)
        // ran axios call sending all the user data
        axios.post('registerUser', {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })
        // save data to localstorage
    }



    return (
        <Container className='text-center'>
            <Row>
                <Col>
                    <h1>Sign Up</h1>
                </Col>
            </Row>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Col className='pt-5 text-center'>
                        <Form.Group onChange={handleChange} value={data.firstName || ""}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control id='firstName' type="text" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={data.lastName || ""}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control id='lastName' type="text" placeholder="Enter Last Name" />
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={data.email || ""}>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control id='email' type="text" placeholder="example@website.com" />
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={data.password || ""}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control id='password' type="text" placeholder="Create a password" />
                        </Form.Group>

                        <Button type='submit' className='btn btn-primary mt-3'>Sign Up</Button>
                    </Col>
                </Form>
            </Row>
        </Container>


    )
    // console.log(SignUp)
}
