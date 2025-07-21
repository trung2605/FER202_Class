// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import các thành phần của React Router
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';

// Component chính của ứng dụng
const App = () => {
  return (
    // BrowserRouter bao bọc toàn bộ ứng dụng để kích hoạt định tuyến
    <Router>
      {/* Thanh điều hướng Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Redux Thunk Cart</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  <i className="bi bi-shop me-1"></i>Sản phẩm
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="bi bi-cart me-1"></i>Giỏ hàng
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-product">
                  <i className="bi bi-plus-circle me-1"></i>Thêm sản phẩm
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Định nghĩa các tuyến đường (Routes) */}
      <Routes>
        {/* Route cho trang danh sách sản phẩm (trang chủ) */}
        <Route path="/" element={<ProductList />} />
        {/* Route cho trang giỏ hàng */}
        <Route path="/cart" element={<Cart />} />
        {/* Route cho trang thêm sản phẩm mới */}
        <Route path="/add-product" element={<ProductForm />} />
      </Routes>
    </Router>
  );
};

export default App;