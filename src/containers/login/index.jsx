import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const login = props => {
    const onSignInHandler = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        const user = {
            email: formDataObj.email,
            password: formDataObj.password
        }

        props.onSignIn(user);
    }

    return (
        <Container className="h-100 d-flex align-items-center justify-content-center">
            <Row>
                <Col>
                    <Form onSubmit={onSignInHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email address" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Sign In</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onSignIn: user => { 
            dispatch({ type: actionTypes.SIGN_IN_REQUESTED, payload: { user: user }});
            dispatch({ type: actionTypes.SIGN_IN_SUCCESS, payload: { user: user }})
        }
    }
}

export default connect(null, mapDispatchToProps)(login);