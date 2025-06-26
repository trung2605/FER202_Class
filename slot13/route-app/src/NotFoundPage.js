import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>404 - Không tìm thấy trang</h1>
      <p>Trang bạn đang tìm không tồn tại.</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
        Quay lại trang chủ
      </Link>
    </div>
  );
}

export default NotFoundPage;