

import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Image } from 'react-bootstrap';

const Home = () => {
  return (

   <Container fluid className="bg-light min-vh-100 p-0">
      <Row className="g-0">
       
        <Col md={9} className="p-5">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="mb-3">Welcome back, HG 👋</h3>
              <p className="text-muted">
                You have <strong>3 new messages</strong> and <strong>2 pending tasks</strong>. Here’s a quick summary of what’s happening today.
              </p>
              <div className="d-flex gap-3 mt-4">
                <Button variant="primary">View Profile</Button>
                <Button variant="outline-secondary">Manage Tasks</Button>
              </div>
            </Card.Body>
          </Card>

        
          <Row className="mt-4">
            <Col md={6}>
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5>Total Users</h5>
                  <h3>1,245</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5>Pending Tasks</h5>
                  <h3>7</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home