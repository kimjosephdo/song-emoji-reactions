import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "bootstrap/dist/css/bootstrap.min.css";

export default function ReactionList() {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px100?text=Emoji" />
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>User1</ListGroup.Item>
                    <ListGroup.Item>User2</ListGroup.Item>
                    <ListGroup.Item>User3</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}