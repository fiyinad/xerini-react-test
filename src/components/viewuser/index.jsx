import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const viewUser = props => {
    const [currentUser, setCurrentUser] = useState({
        first_name: '',
        other_names: '',
        address: {},
        mobile: '',
        email: '',
        company: '',
        preferences: {
            contact: []
        }
    });

    useEffect(() => {
        fetchUserFromStore(props.match.params.id);
    }, [currentUser]);

    const fetchUserFromStore = idParam => {
        const foundUser = props.users.find(u => idParam === u.id);
        if (foundUser) {
            setCurrentUser(foundUser);
        }
    }

    const onBackHandler = e => {
        e.preventDefault();

        props.history.push('/profile');
    }

    return (
        <Container className="h-100 align-items-center justify-content-center">
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formFirstName">
                            <Form.Label column sm="2">First Name</Form.Label>
                            <Form.Control name="first_name" defaultValue={currentUser.first_name} readOnly />
                        </Form.Group>

                        <Form.Group controlId="formOtherNames">
                            <Form.Label column sm="2">Other Name(s)</Form.Label>
                            <Form.Control name="other_names" defaultValue={currentUser.other_names} readOnly />
                        </Form.Group>

                        <Form.Group controlId="formStreet">
                            <Form.Label column sm="2">Street</Form.Label>
                            <Form.Control name="street" defaultValue={currentUser.address.street} readOnly />
                        </Form.Group>

                        <Form.Group controlId="formTown">
                            <Form.Label column sm="2">Town</Form.Label>
                            <Form.Control name="town" defaultValue={currentUser.address.town} readOnly />
                        </Form.Group>

                        <Form.Group controlId="formCounty">
                            <Form.Label column sm="2">County</Form.Label>
                            <Form.Control name="county" defaultValue={currentUser.address.county} readOnly />
                        </Form.Group>

                        <Form.Group controlId="formPostcode">
                            <Form.Label column sm="2">Postcode</Form.Label>
                            <Form.Control name="postcode" defaultValue={currentUser.address.postcode} readOnly />
                        </Form.Group>

                        <Form.Group controlId="formMobile">
                            <Form.Label column sm="2">Mobile</Form.Label>
                            <Form.Control name="mobile" defaultValue={currentUser.mobile} readOnly />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label column sm="2">Email</Form.Label>
                            <Form.Control name="email" defaultValue={currentUser.email} readOnly />
                        </Form.Group>

                        <Form.Group controlId="formCompany">
                            <Form.Label column sm="2">Company</Form.Label>
                            <Form.Control name="company" defaultValue={currentUser.company} readOnly />
                        </Form.Group>

                        <Button className="float-right" variant="primary" type="button" onClick={onBackHandler}>Back</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}

const mapStateToProps = state => {
    return {
        users: state.profile.users
    }
}

export default withRouter(connect(mapStateToProps)(viewUser));;