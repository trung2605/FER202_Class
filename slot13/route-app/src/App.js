// src/App.js
import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import Routes, Route, useNavigate
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login'; // Import component Login

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State để kiểm tra đã đăng nhập chưa
  const navigate = useNavigate(); // Sử dụng useNavigate ở cấp App để điều hướng sau khi login

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập khi ứng dụng khởi tạo
    const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Cập nhật trạng thái đã đăng nhập
    // navigate('/posts'); // Điều hướng sẽ được xử lý trong Login component
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Đặt lại trạng thái chưa đăng nhập
    localStorage.removeItem('isAuthenticated'); // Xóa thông tin đăng nhập
    navigate('/login'); // Chuyển hướng về trang đăng nhập
  };

  return (
    <div>
      <h1>React Router Example</h1>
      {/* Truyền trạng thái isAuthenticated và hàm handleLogout cho Navigation */}
      <Navigation isAuthenticated={isAuthenticated} onLogout={handleLogout} /> 
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Truyền hàm handleLoginSuccess cho component Login */}
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} /> 

          {/* Protected Routes: Chỉ hiển thị nếu đã đăng nhập */}
          {isAuthenticated ? (
            <>
              <Route path="/posts" element={<Post />} />
              <Route path="/post/:id" element={<PostDetail />} />
            </>
          ) : (
            // Nếu chưa đăng nhập, chuyển hướng người dùng đến trang đăng nhập nếu cố gắng truy cập /posts hoặc /post/:id
            // Hoặc có thể render một component thông báo lỗi/yêu cầu đăng nhập
            // Trong trường hợp này, chúng ta sẽ không định nghĩa route nếu chưa đăng nhập, người dùng sẽ ở lại trang login hoặc trang trước đó
            <Route path="*" element={<Login onLoginSuccess={handleLoginSuccess} />} /> // Chuyển hướng tất cả các route không khớp đến Login nếu chưa đăng nhập
          )}

        </Routes>
      </Container>
    </div>
  );
}

export default App;