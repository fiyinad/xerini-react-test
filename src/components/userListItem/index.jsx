import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons'

const userListItem = props => {
    return (
        <Card>
            <Card.Body className="btn">
                <p className="clearfix">
                    <a className="btn float-left">{props.user.first_name} {props.user.other_names}</a>
                    <Button className="float-right btn" onClick={(e) => { e.preventDefault(); props.onEditClick(props.user.id) }}>
                        Edit <FontAwesomeIcon icon={faEdit} size="1x" />
                    </Button>
                    <Button className="float-right btn mr-1" onClick={(e) => { e.preventDefault(); props.onView(props.user.id) }}>
                        View <FontAwesomeIcon icon={faEye} size="1x" />
                    </Button>
                </p>
            </Card.Body>
        </Card>
    );
}

export default userListItem;