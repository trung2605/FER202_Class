// src/components/Login.js
import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
import { Form, Button, Alert, Container } from 'react-bootstrap'; // Import các component Bootstrap

function Login({ onLoginSuccess }) { // Nhận prop onLoginSuccess
  const [username, setUsername] = useState(''); // State cho tên người dùng
  const [password, setPassword] = useState(''); // State cho mật khẩu
  const [error, setError] = useState(''); // State để lưu thông báo lỗi
  const navigate = useNavigate(); // Sử dụng hook useNavigate để điều hướng

  const handleSubmit = (e) => { // Xử lý sự kiện submit form
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form (tải lại trang)

    // Logic xác thực đơn giản
    if (username === 'admin' && password === 'password') {
      setError(''); // Xóa lỗi nếu có
      localStorage.setItem('isAuthenticated', 'true'); // Đánh dấu người dùng đã đăng nhập (có thể dùng context API hoặc Redux cho ứng dụng lớn hơn)
      onLoginSuccess(); // Gọi hàm callback khi đăng nhập thành công
      navigate('/posts'); // Chuyển hướng đến trang Posts
    } else {
      setError('Invalid username or password'); // Đặt thông báo lỗi
    }
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}> {/* Bọc form với hàm xử lý submit */}
        {error && <Alert variant="danger">{error}</Alert>} {/* Hiển thị lỗi nếu có */}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Cập nhật state khi input thay đổi
            required // Trường bắt buộc
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Cập nhật state khi input thay đổi
            required // Trường bắt buộc
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;