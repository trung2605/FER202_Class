// src/Exercise2.js
import React from 'react';
import { Container, Row, Col, Nav, Image } from 'react-bootstrap'; // Import Image component
import fptLogo from './fpt.png'; // <-- Đảm bảo bạn có file ảnh này trong thư mục src

function Exercise4() {
  return (
    <div className="exercise-2-container">
      {/* Header Section */}
      {/* Sử dụng background color trực tiếp qua style để khớp với màu cam */}
      <Container fluid className="text-center py-4" style={{ backgroundColor: '#ff9900' }}>
        {/* Row cho logo và tên trường */}
        <Row className="justify-content-center align-items-center mb-3">
          <Col xs="auto"> {/* xs="auto" để cột tự điều chỉnh chiều rộng theo nội dung */}
            {/* Hình ảnh logo */}
            {/* img-fluid giúp ảnh responsive, max-width để kiểm soát kích thước */}
            <Image src={fptLogo} alt="FPT Education Logo" fluid style={{ maxWidth: '300px' }} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <h2 className="text-white mt-2">FPT UNIVERSITY</h2> {/* text-white để chữ màu trắng */}
          </Col>
        </Row>

        {/* Navigation Bar cho Home, About, Contact */}
        <Row className="justify-content-center mt-3">
          <Col xs="auto">
            <Nav className="justify-content-center"> {/* Căn giữa nav items */}
              <Nav.Link href="#" className="text-white mx-2">Home</Nav.Link> {/* text-white cho link màu trắng */}
              <Nav.Link href="#" className="text-white mx-2">About</Nav.Link>
              <Nav.Link href="#" className="text-white mx-2">Contact</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>

      {/* Main Content Section */}
      <Container className="my-5"> {/* my-5 thêm margin top/bottom */}
        <Row className="justify-content-center">
          <Col md={8}> {/* Căn giữa nội dung và giới hạn chiều rộng */}
            <h2 className="text-center mb-3">About</h2>
            <p className="text-center mb-5">This is the about section of the website.</p>

            <h2 className="text-center mb-3">Contact</h2>
            <p className="text-center">For any inquiries, please contact us at <a href="mailto:example@example.com">example@example.com</a>.</p>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      {/* background color và text color tùy chỉnh */}
      <Container fluid className="text-center py-3" style={{ backgroundColor: '#f0e0c0', color: '#555' }}>
        <p className="mb-0">&copy; 2023 Website. All rights reserved.</p> {/* mb-0 loại bỏ margin bottom mặc định của p */}
      </Container>
    </div>
  );
}

export default Exercise4; // Export component