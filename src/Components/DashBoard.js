// import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route } from "react-router";

export default function Dashboard() {

    // axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/user'), {
        
    // }
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })

    return (
        <Route>
            <Container>
                <Row>
                    <Col>
                        <h1>Dashboard</h1>
                    </Col>
                </Row>
            </Container>
        </Route>
    )
}