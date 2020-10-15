import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navigation = props => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/profile">
                                    <Nav.Link>Profile</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/news">
                                    <Nav.Link>News</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/events">
                                    <Nav.Link>Events</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}

export default navigation;