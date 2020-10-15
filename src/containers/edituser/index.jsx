import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import * as actionTypes from '../../store/actions';

const editUser = props => {

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

    const fetchUserInReduxStore = idParam => {
        const foundUser = props.users.find(u => idParam === u.id);
        if (foundUser) {
            setCurrentUser(foundUser);
        }
    }

    const onCancelClickHandler = () => {
        props.history.push('/profile');
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        const updatedUser = {
            ...currentUser,
            first_name: formDataObj.first_name,
            other_names: formDataObj.other_names,
            address: {
                street: formDataObj.street,
                town: formDataObj.town,
                county: formDataObj.county,
                postcode: formDataObj.postcode
            },
            mobile: formDataObj.mobile,
            email: formDataObj.email,
            company: formDataObj.company
        }

        props.onUpdateUser(updatedUser);
        props.history.push('/profile');
    }

    useEffect(() => {
        fetchUserInReduxStore(props.match.params.id);
    }, [currentUser])

    return (
        <Container className="h-100 align-items-center justify-content-center">
            <Row>
                <Col>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group as={Row} controlId="formFirstName">
                            <Form.Label column sm="2">First Name</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name="first_name" defaultValue={currentUser.first_name} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formOtherNames">
                            <Form.Label column sm="2">Other Name(s)</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name="other_names" defaultValue={currentUser.other_names} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formAddressStreet">
                            <Form.Label column sm="2">Street</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name="street" defaultValue={currentUser.address.street} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formAddressTown">
                            <Form.Label column sm="2">Town</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name="town" defaultValue={currentUser.address.town} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formAddressCounty">
                            <Form.Label column sm="2">County</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name="county" defaultValue={currentUser.address.county} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formAddressPostcode">
                            <Form.Label column sm="2">Postcode</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name="postcode" defaultValue={currentUser.address.postcode} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formMobile">
                            <Form.Label column sm="2">Mobile</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name="mobile" defaultValue={currentUser.mobile} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formEmail">
                            <Form.Label column sm="2">Email</Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" name="email" defaultValue={currentUser.email} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formCompany">
                            <Form.Label column sm="2">Company</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name="company" defaultValue={currentUser.company} />
                            </Col>
                        </Form.Group>

                        <Button className="float-left" variant="danger" type="button" onClick={onCancelClickHandler}>Cancel</Button>
                        <Button className="float-right" variant="primary" type="submit">Save</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        users: state.profile.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateUser: user => { 
            dispatch({ type: actionTypes.USER_UPDATED, payload: { ...user }});
            
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(editUser));