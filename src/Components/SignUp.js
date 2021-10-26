import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";






const SignUp = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => setInputs(prevState => ({ ...prevState, [e.target.name]: [e.target.value] }));

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('User Created')
        console.log(inputs)
    }

    return (
        <Container className='text-center'>
            <Row>
                <Col>
                    <h1>Sign Up</h1>
                </Col>
            </Row>
            <Row>
                <Form onSubmit = {handleSubmit}>
                    <Col className='pt-5 text-center'>
                        <Form.Group controlId='firstName' onChange = {handleChange}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group controlId='lastName' onChange = {handleChange}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" />
                        </Form.Group>

                        <Form.Group controlId='email' onChange = {handleChange}>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control type="text" placeholder="example@website.com" />
                        </Form.Group>

                        <Form.Group controlId='password' onChange = {handleChange}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Create a password" />
                        </Form.Group>

                        <Form.Group controlId='address' onChange = {handleChange}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter your street Address" />
                        </Form.Group>

                        <Form.Group controlId='address2' onChange = {handleChange}>
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control type="text" placeholder="Enter Apt #" />
                        </Form.Group>

                        <Form.Group controlId='city' onChange = {handleChange}>
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter your City" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formState" onChange = {handleChange}>
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" name="state">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </Form.Control>
                        </Form.Group>
 
                        <Form.Group controlId='zip' onChange = {handleChange}>
                            <Form.Label>Zipcode</Form.Label>
                            <Form.Control type="text" placeholder="Enter Zipcode" />
                        </Form.Group>
                        <Button type='submit' className='btn btn-primary mt-3'>Sign Up</Button>
                    </Col>
                </Form>
            </Row>
        </Container>


)
// console.log(SignUp)
}
export default SignUp;