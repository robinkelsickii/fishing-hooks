import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Route } from "react-router";

export default function LoginPage(){
    return(
        <Route>
            <Container>
                <Row>
                    <Col className = 'text-center'>
                    <h1>Login</h1>

                    <Form.Group controlId='email'>
                                <Form.Label>E-Mail</Form.Label>
                                <Form.Control type="text" placeholder="example@website.com" />
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Create a password" />
                            </Form.Group>
                            <Col className = 'd-flex justify-content-center'>
                            <Button type='button' className='btn btn-primary mt-3 me-3'>Sign Up</Button>
                            <Button type='submit' className='btn btn-success mt-3'>Login</Button>
                            </Col>
                    </Col>
                </Row>
            </Container>
        </Route>
    )
}