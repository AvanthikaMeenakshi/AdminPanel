import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import HeartRate from './components/HeartRate';
import CaloriesBurn from './components/CaloriesBurn';
import Steps from './components/Steps';
import Distance from './components/Distance';

const FitnessDashboard = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Panel Protector</h3>
      </Col>
    </Row>
    <Row>
      <HeartRate />
      <CaloriesBurn />
      <Steps />
      <Distance />
    </Row>
  </Container>
);

export default FitnessDashboard;
