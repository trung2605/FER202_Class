// src/Exercise5.js
import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
  Breadcrumb,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPrint,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGooglePlusG,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Import hình ảnh
import fptLogo from "./fpt.png"; // Đảm bảo có file ảnh này
import studentsBanner from "./student-banner.jpg"; // Đảm bảo có file ảnh này
import student1 from "./student.webp"; // Đảm bảo có file ảnh này
import student2 from "./student.webp"; // Đảm bảo có file ảnh này
import student3 from "./student.webp"; // Đảm bảo có file ảnh này
import student4 from "./student.webp"; // Đảm bảo có file ảnh này

function Exercise5() {
  return (
    <div className="exercise-5-container">
      {/* Top Navbar */}
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Container fluid className="px-5">
          {" "}
          {/* Thêm padding hai bên */}
          {/* Logo và Tên trường */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Image
              src={fptLogo}
              alt="FPT Education Logo"
              height="30"
              className="me-2"
            />
            <span className="fw-bold">FPT UNIVERSITY</span>
          </Navbar.Brand>
          {/* Toggle button cho responsive navbar */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Các link điều hướng */}
            <Nav className="mx-auto">
              {" "}
              {/* mx-auto để căn giữa các Nav.Link nếu có đủ không gian */}
              <Nav.Link href="#home">Trang chủ</Nav.Link>
              <Nav.Link href="#majors">Ngành học</Nav.Link>
              <Nav.Link href="#admissions">Tuyển sinh</Nav.Link>
              <Nav.Link href="#students">Sinh viên</Nav.Link>
            </Nav>
            {/* Form tìm kiếm */}
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>{" "}
              {/* Nút Search */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section / Banner Image */}
      <Container fluid className="p-0">
        {" "}
        {/* p-0 để không có padding */}
        <Image src={studentsBanner} alt="Students Banner" fluid />
      </Container>

      {/* Breadcrumb Section */}
      {/* background-color tùy chỉnh để khớp với hình ảnh */}
      <Container
        fluid
        className="py-2 px-5"
        style={{ backgroundColor: "#f0e0c0" }}
      >
        <Breadcrumb className="mb-0">
          {" "}
          {/* mb-0 để loại bỏ margin bottom */}
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Students</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Students Detail Section */}
      <Container className="my-5">
        <h2 className="text-center mb-5">Students Detail</h2>
        <Row className="justify-content-center">
          {/* Card 1 */}
          <Col md={6} lg={4} className="mb-4 d-flex justify-content-center">
            {" "}
            {/* Căn giữa card trong col */}
            <Card style={{ width: "18rem" }} className="shadow-sm">
              {" "}
              {/* shadow-sm để tạo bóng đổ nhẹ */}
              <Card.Img variant="top" src={student1} alt="Student 1" />
              <Card.Body className="text-center">
                <Card.Title className="mb-1">DE160182</Card.Title>
                <Card.Text>Nguyễn Hữu Quốc Khánh</Card.Text>
                <Card.Text className="d-flex justify-content-around">
                  <span>DaNang</span>
                  <span>Absent</span>
                </Card.Text>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="student1_status"
                    id="student1_absent"
                    value="absent"
                  />
                  <label className="form-check-label" htmlFor="student1_absent">
                    Absent
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="student1_status"
                    id="student1_present"
                    value="present"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="student1_present"
                  >
                    Present
                  </label>
                </div>
                <Button variant="primary" className="mt-3">
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={6} lg={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: "18rem" }} className="shadow-sm">
              <Card.Img variant="top" src={student2} alt="Student 2" />
              <Card.Body className="text-center">
                <Card.Title className="mb-1">DE160377</Card.Title>
                <Card.Text>Choy Vĩnh Điện</Card.Text>
                <Card.Text className="d-flex justify-content-around">
                  <span>QuangNam</span>
                  <span>Absent</span>
                </Card.Text>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="student2_status"
                    id="student2_absent"
                    value="absent"
                  />
                  <label className="form-check-label" htmlFor="student2_absent">
                    Absent
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="student2_status"
                    id="student2_present"
                    value="present"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="student2_present"
                  >
                    Present
                  </label>
                </div>
                <Button variant="primary" className="mt-3">
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Card 3 */}
          <Col md={6} lg={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: "18rem" }} className="shadow-sm">
              <Card.Img variant="top" src={student3} alt="Student 3" />
              <Card.Body className="text-center">
                <Card.Title className="mb-1">DE160547</Card.Title>
                <Card.Text>Đỗ Nguyên Phúc</Card.Text>
                <Card.Text className="d-flex justify-content-around">
                  <span>QuangNam</span>
                  <span>Absent</span>
                </Card.Text>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="student3_status"
                    id="student3_absent"
                    value="absent"
                  />
                  <label className="form-check-label" htmlFor="student3_absent">
                    Absent
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="student3_status"
                    id="student3_present"
                    value="present"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="student3_present"
                  >
                    Present
                  </label>
                </div>
                <Button variant="primary" className="mt-3">
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col md={6} lg={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: "18rem" }} className="shadow-sm">
              <Card.Img variant="top" src={student4} alt="Student 4" />
              <Card.Body className="text-center">
                <Card.Title className="mb-1">DE170049</Card.Title>
                <Card.Text>Lê Hoàng Minh</Card.Text>
                <Card.Text className="d-flex justify-content-around">
                  <span>DaNang</span>
                  <span>Absent</span>
                </Card.Text>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="student4_status"
                    id="student4_absent"
                    value="absent"
                  />
                  <label className="form-check-label" htmlFor="student4_absent">
                    Absent
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="student4_status"
                    id="student4_present"
                    value="present"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="student4_present"
                  >
                    Present
                  </label>
                </div>
                <Button variant="primary" className="mt-3">
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <Container
        fluid
        className="py-5 px-5"
        style={{ backgroundColor: "#ff9900", color: "#fff" }}
      >
        {" "}
        {/* py-5 cho padding lớn */}
        <Row className="align-items-center">
          {/* Our Address (Left Column) */}
          <Col md={6} className="text-md-start text-center mb-4 mb-md-0">
            {" "}
            {/* text-md-start để căn trái trên màn hình md trở lên */}
            <h5 className="mb-3">Our Address</h5>
            <p className="mb-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              Khu đô thị FPT Đà Nẵng
            </p>
            <p className="mb-1">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              +84023111111
            </p>
            <p className="mb-1">
              <FontAwesomeIcon icon={faPrint} className="me-2" />
              +852 8765 4321
            </p>
            <p className="mb-0">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              <a href="mailto:fptudanang@fpt.edu.vn" className="text-white">
                fptudanang@fpt.edu.vn
              </a>
            </p>
          </Col>

          {/* Social Media Icons (Right Column) */}
          <Col md={6} className="text-md-end text-center">
            {" "}
            {/* text-md-end để căn phải trên màn hình md trở lên */}
            <div className="d-flex justify-content-center justify-content-md-end mb-3">
              {" "}
              {/* Căn giữa trên sm, căn phải trên md */}
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faGooglePlusG} size="2x" />
              </a>
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          {" "}
          {/* Row cho Copyright */}
          <Col className="text-center">
            <p className="mb-0">&copy; Copyright 2023</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Exercise5;
