import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TotalProducts from './components/TotalProducts';
import TotalProfit from './components/TotalProfit';
import OrdersToday from './components/OrdersToday';
import Subscriptions from './components/Subscriptions';
import RecentOrders from './components/RecentOrders';

const ECommerceDashboard = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Dashboard</h3>
      </Col>
    </Row>
    <Row>
      <TotalProducts />
      <TotalProfit />
      <OrdersToday />
      <Subscriptions />
    </Row>
    <Row>
      <RecentOrders />
    </Row>
  </Container>
);

export default ECommerceDashboard;
