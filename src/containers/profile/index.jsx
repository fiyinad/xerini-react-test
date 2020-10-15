import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserListIten from '../../components/userListItem/index';

const profile = props => {

    const onViewClickHandler = id => {
        props.history.push(`/users/view/${id}`);
    }

    const onEditClickHandler = id => {
        props.history.push(`/users/${id}`);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <ListGroup>
                        {props.users.map(u => (
                            <ListGroup.Item key={u.id} className="clearfix">
                                <UserListIten user={u} onEditClick={() => onEditClickHandler(u.id)} onView={() => onViewClickHandler(u.id)} />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
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

export default withRouter(connect(mapStateToProps)(profile));