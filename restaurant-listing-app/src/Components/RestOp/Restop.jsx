import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({ op }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Restaurant Timings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Monday: {op.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday: {op.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday: {op.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday: {op.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday: {op.Friday}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Restop;
