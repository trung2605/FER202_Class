// src/components/Navigation.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation({ isAuthenticated, onLogout }) { // Nhận prop isAuthenticated và onLogout
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          {isAuthenticated && ( // Chỉ hiển thị liên kết Posts nếu đã đăng nhập
            <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
          )}
        </Nav>
        <Nav>
          {isAuthenticated ? ( // Hiển thị nút Logout nếu đã đăng nhập
            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
          ) : ( // Hiển thị nút Login nếu chưa đăng nhập
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;