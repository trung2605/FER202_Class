// src/Exercise1.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap'; // Import Nav component

function Exercise3() {
  return (
    <div className="exercise-1-container">
      {/* Header Section */}
      <Container fluid className="py-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
        <h1 className="text-center">Let's test the grid!</h1>
      </Container>

      {/* Navigation Tabs Section */}
      {/* Container cho tabs, margin bottom để tạo khoảng cách với phần lưới */}
      <Container className="mb-4">
        <Nav variant="tabs" defaultActiveKey="/home"> {/* variant="tabs" để tạo kiểu tab */}
          <Nav.Item>
            <Nav.Link href="/home" active> {/* active để tab này được chọn mặc định */}
              Active
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled> {/* disabled để tab này không thể click */}
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      {/* Main Grid Section (đã có từ trước) */}
      <Container className="py-4">
        {/* Hàng đầu tiên */}
        <Row className="">
          <Col md={6} className="bg-light p-3 border">
            First col
          </Col>
          <Col md={6} className="bg-light p-3 border">
            Second col
          </Col>
        </Row>

        {/* Hàng thứ hai */}
        <Row className="">
          <Col md={4} className="bg-light p-3 border">
            col
          </Col>
          <Col md={4} className="bg-light p-3 border">
            col
          </Col>
          <Col md={4} className="bg-light p-3 border">
            col
          </Col>
        </Row>

        {/* Hàng thứ ba */}
        <Row>
          <Col md={3} className="bg-light p-3 border">
            col
          </Col>
          <Col md={3} className="bg-light p-3 border">
            col
          </Col>
          <Col md={3} className="bg-light p-3 border">
            col
          </Col>
          <Col md={3} className="bg-light p-3 border">
            col
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <Container fluid className="py-3 mt-4 text-center" style={{ backgroundColor: '#d8c2c7', color: '#333' }}>
        Created by ABC!
      </Container>
    </div>
  );
}

export default Exercise3;