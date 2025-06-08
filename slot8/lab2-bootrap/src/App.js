import React from 'react';
// import './App.css'; // Đã loại bỏ import CSS để nhúng trực tiếp
import 'bootstrap/dist/css/bootstrap.min.css';

import pizza1 from "./assets/pizza1.jpg";
import pizza2 from "./assets/pizza2.jpg";
import pizza3 from "./assets/pizza3.jpg";
import pizza4 from "./assets/pizza4.jpg";
import pizza5 from "./assets/pizza5.jpg";

import menu1 from "./assets/menu1.jpg";
import menu2 from "./assets/menu2.jpg";
import menu3 from "./assets/menu3.jpg";
import menu4 from "./assets/menu4.jpg";

// Import các component từ react-bootstrap
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Carousel,
  Image,
  Card,
} from 'react-bootstrap';

// Sử dụng placeholder images thay vì import từ assets
// Bạn có thể thay thế bằng đường dẫn ảnh thực tế nếu muốn
/**
 * Component Header hiển thị thanh điều hướng, tiêu đề và ô tìm kiếm.
 * Sử dụng các component Navbar, Container, Nav, Form, FormControl, Button của React Bootstrap.
 */
function Header() {
  return (
    // Navbar là component chính cho thanh điều hướng
    <Navbar expand="lg" className="bg-dark-custom w-full">
      
      <Container fluid className="px-6 py-2">
        
        <Row className="flex-grow justify-content-between align-items-center w-full">
          
          <Col xs={12} lg={8} className="d-flex align-items-center gap-4 text-white">
            <Navbar.Brand href="/" className="text-white">
              
              <h2 className="mb-0">Pizza House</h2>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav className="me-auto fs-5">
                <Nav.Link href="/" className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link href="/" className="text-white">
                  About us
                </Nav.Link>
                <Nav.Link href="/" className="text-white">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          
          <Col xs={12} lg={4} className="mt-2 mt-lg-0">
            
            <Form className="d-flex">
              
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              
              <Button variant="danger" type="submit">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

/**
 * Component Banner hiển thị carousel ảnh pizza.
 * Sử dụng các component Carousel, Carousel.Item, Image của React Bootstrap.
 */
function Banner() {
  const pizzaImages = [
    { src: pizza1, alt: 'Slide 1', caption: 'Neapolitan Pizza', text: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!' },
    { src: pizza2, alt: 'Slide 2', caption: 'Neapolitan Pizza', text: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!' },
    { src: pizza3, alt: 'Slide 3', caption: 'Neapolitan Pizza', text: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!' },
    { src: pizza4, alt: 'Slide 4', caption: 'Neapolitan Pizza', text: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!' },
    { src: pizza5, alt: 'Slide 5', caption: 'Neapolitan Pizza', text: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!' },
  ];

  return (
    // Container để đảm bảo carousel có chiều rộng đầy đủ
    <Container fluid className="p-0 banner-container">
      
      <Carousel interval={3000}> 
        
        {pizzaImages.map((image, index) => (
          <Carousel.Item key={index}>
            
            <Image src={image.src} className="d-block w-100 banner-img" alt={image.alt} fluid />
            
            <Carousel.Caption className="carousel-caption-custom">
              <h3>{image.caption}</h3>
              <p className="fs-5">{image.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

/**
 * Component Booking hiển thị form đặt bàn.
 * Sử dụng các component Container, Form, Row, Col, Button của React Bootstrap.
 */
function Booking() {
  return (
    // Container để căn chỉnh form
    <Container className="mt-4 text-white booking-section">
      <h2 className="mb-1 text-center">Book Your Table</h2>
      
      <Form>
        
        <Row className="mb-5">
          
          <Col md={4} className="mb-3 mb-md-0">
            
            <Form.Control
              type="text"
              id="name"
              placeholder="Your Name*"
              required
              className="form-control-custom"
            />
          </Col>
          
          <Col md={4} className="mb-3 mb-md-0">
            
            <Form.Control
              type="email"
              id="email"
              placeholder="Your Email*"
              required
              className="form-control-custom"
            />
          </Col>
          
          <Col md={4}>
            
            <Form.Select id="service" className="form-select-custom">
              <option value="">Select a service</option>
              <option value="dine-in">Dine In</option>
              <option value="takeaway">Takeaway</option>
              <option value="delivery">Delivery</option>
            </Form.Select>
          </Col>
        </Row>
        
        <Form.Group className="mb-3">
          
          <Form.Control
            as="textarea" // as="textarea" để render là thẻ textarea
            id="comment"
            rows="4"
            placeholder="Please write your comment here"
            className="form-control-custom"
          />
        </Form.Group>
        
        <Button variant="warning" type="submit" className="text-white btn-custom-warning">
          Send message
        </Button>
      </Form>
    </Container>
  );
}

/**
 * Component Menu (Không thay đổi vì không dùng Bootstrap Class trực tiếp trong bản gốc)
 * Giữ nguyên cấu trúc của bạn, bạn có thể custom nó sau này.
 */
function Menu() {
  // Dữ liệu mẫu cho các món ăn
  const menuItems = [
    {
      id: 1,
      image: menu1,
      name: 'Margherita Pizza',
      price: '40.00',
      status: 'SALE',
    },
    {
      id: 2,
      image: menu2,
      name: 'Mushroom Pizza',
      price: '24.00',
      status: null,
    },
    {
      id: 3,
      image: menu3,
      name: 'Card title',
      price: '25.00',
      status: 'NEW',
    },
    {
      id: 4,
      image: menu4,
      name: 'Card title',
      price: '40.00',
      status: 'SALE',
    },
  ];

  return (
    <Container className="text-white menu-section">
      <h2 className="text-center mb-4">Our Menu</h2>
      <Row className="g-4">
        {/* Lặp qua các món ăn để tạo các Card */}
        {menuItems.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}> {/* 4 cột trên lg, 3 trên md, 2 trên sm, 1 trên xs */}
            <Card className="menu-card h-100" >
              <div className="card-img-wrapper">
                <Card.Img variant="top" src={item.image} alt={item.name} className="menu-card-img" />
                {item.status && (
                  <span className={`badge-status ${item.status === 'SALE' ? 'badge-sale' : 'badge-new'}`}>
                    {item.status}
                  </span>
                )}
              </div>
              <Card.Body className="menu-card-body">
                <Card.Title className="menu-card-title">{item.name}</Card.Title>
                <Card.Text className="menu-card-price">
                  ${item.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}



/**
 * Component chính của ứng dụng, tổng hợp các phần Header, Banner, Menu và Booking.
 * Sử dụng các component Container, Row, Col của React Bootstrap.
 */
function App() {
  return (
    <Container fluid className="App d-flex flex-column align-items-center p-0">
      
      <style>{`
        /* General styling for the entire app */
        body {
          font-family: 'Inter', sans-serif;
          background-color: #1a1a1a; /* Màu nền tổng thể cho app */
        }

        .App {
          min-height: 100vh;
          background-color: #1a1a1a; /* Đảm bảo nền khớp với body */
        }

        /* Custom background color for header and content sections */
        .bg-dark-custom {
          background-color: #282c34 !important; /* Một màu xám đậm hơn */
        }

        /* Padding and spacing */
        .px-6 {
          padding-left: 4rem !important;
          padding-right: 4rem !important;
        }

        .py-5 {
          padding-top: 3rem !important;
          padding-bottom: 3rem !important;
        }

        /* Header Styling */
        .navbar {
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }

        .navbar-brand h2 {
          font-weight: bold;
          color: #fff;
        }

        .navbar .nav-link {
          color: #fff !important;
          padding: 0.5rem 1rem;
          border-radius: 0.3rem;
          transition: background-color 0.3s ease;
        }

        .navbar .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .form-control.me-2 {
          border-radius: 0.5rem;
          background-color: #3a3f47;
          border: 1px solid #4a4f57;
          color: #fff;
        }

        .form-control.me-2::placeholder {
          color: #bbb;
        }

        .btn-danger {
          border-radius: 0.5rem;
          background-color: #dc3545;
          border-color: #dc3545;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .btn-danger:hover {
          background-color: #c82333;
          border-color: #bd2130;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        /* Banner Styling */
        .banner-container {
          overflow: hidden; /* Ensure rounded corners clip content */
          border-radius: 0.75rem; /* Rounded corners for the banner carousel */
          margin-top: 1rem;
          margin-bottom: 1rem;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .banner-img {
          width: 100%;
          height: 400px; /* Chiều cao cố định cho ảnh banner */
          object-fit: cover; /* Đảm bảo ảnh được căn chỉnh và không bị méo */
          border-radius: 0.75rem; /* Rounded corners for the images inside carousel */
        }

        .carousel-caption-custom {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 0.5rem;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        /* Menu Section Styling */
        .menu-section {
          padding: 2rem;
          background-color: #282c34; /* Same as header for consistency */
          border-radius: 0.75rem;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .menu-item {
          background-color: #3a3f47; /* Slightly lighter background for each item */
          padding: 1.5rem;
          border-radius: 0.75rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease-in-out;
        }

        .menu-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .menu-item-img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border: 3px solid #ffc107; /* Highlight border */
        }

        .price-text {
          color: #ffc107; /* Màu vàng cam cho giá */
          font-size: 1.25rem;
        }

        /* Booking Section Styling */
        .booking-section {
          padding: 2rem;
          background-color: #282c34; /* Same as header for consistency */
          border-radius: 0.75rem;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .form-control-custom,
        .form-select-custom {
          background-color: #3a3f47;
          border: 1px solid #4a4f57;
          color: #fff;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
        }

        .form-control-custom::placeholder {
          color: #bbb;
        }

        .form-select-custom option {
          background-color: #3a3f47;
          color: #fff;
        }

        .btn-custom-warning {
          background-color: #ffc107; /* Màu vàng cam */
          border-color: #ffc107;
          color: #fff !important;
          font-weight: bold;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .btn-custom-warning:hover {
          background-color: #e0a800;
          border-color: #d39e00;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        /* Responsive adjustments */
        @media (max-width: 992px) {
          .px-6 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }

        @media (max-width: 768px) {
          .px-6 {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }

          .navbar-brand h2 {
            font-size: 1.5rem;
          }

          .carousel-caption-custom h3 {
            font-size: 1.5rem;
          }
          .carousel-caption-custom p {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
      
      <Header />
      
      <Banner />
      
      <Container fluid className="content d-flex flex-column gap-5 px-6 py-5 bg-dark-custom">
        
        <Row className="w-full">
          <Col>
            <Menu />
          </Col>
        </Row>
        <Row className="w-full">
          <Col>
            <Booking />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;