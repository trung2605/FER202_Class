import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Chào mừng đến với trang chủ!</h1>
      <p>Đây là ứng dụng React của bạn.</p>
      <Link to="/login" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
        Đi đến trang đăng nhập
      </Link>
    </div>
  );
}

export default HomePage;