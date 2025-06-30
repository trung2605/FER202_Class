import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation Hook

function Header() {
  const location = useLocation(); // Lấy thông tin về URL hiện tại

  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm py-3"> {/* Thêm class và padding */}
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
         
          <span className="navbar-brand-text">Food Blog</span> {/* Thay "Food" bằng "Food Blog" và thêm class */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav-links"> {/* Đổi me-auto thành ms-auto để căn phải, thêm class */}
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active-link' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/news" className={location.pathname === '/news' ? 'active-link' : ''}>
              News
            </Nav.Link>
            <Nav.Link as={Link} to="/quiz" className={location.pathname === '/quiz' ? 'active-link' : ''}>
              Quiz
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;