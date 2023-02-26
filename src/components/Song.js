import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Song() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px100?text=Album Cover" />
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Song Title</ListGroup.Item>
          <ListGroup.Item>Artist Name</ListGroup.Item>
          <ListGroup.Item>Album Title</ListGroup.Item>
        </ListGroup>
        {/* need a backend input here 
        also, make it horizontal */}
        <ListGroup variant="flush">
          <ListGroup.Item>Song Title</ListGroup.Item>
          <ListGroup.Item>Artist Name</ListGroup.Item>
          <ListGroup.Item>Album Title</ListGroup.Item>
        </ListGroup>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Add Song</Button>
      </Card.Body>
    </Card>
  );
}
