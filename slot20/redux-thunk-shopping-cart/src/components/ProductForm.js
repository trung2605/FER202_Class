// src/components/ProductForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Hook để dispatch actions
import { addProduct } from '../actions/productActions'; // Import thunk action creator
import { useNavigate } from 'react-router-dom'; // Hook để điều hướng

// Component để thêm sản phẩm mới
const ProductForm = () => {
  const dispatch = useDispatch(); // Khởi tạo dispatch hook
  const navigate = useNavigate(); // Khởi tạo navigate hook để điều hướng sau khi thêm sản phẩm
  
  // State để quản lý dữ liệu form
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    catalogs: '',
  });

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi submit mặc định của form

    // Chuẩn bị dữ liệu sản phẩm để dispatch
    const newProduct = {
      ...product,
      price: parseFloat(product.price), // Chuyển đổi giá sang số
      catalogs: product.catalogs.split(',').map(cat => cat.trim()).filter(cat => cat !== ''), // Tách chuỗi catalogs thành mảng
    };

    // Dispatch thunk action `addProduct`
    // Thay vì dispatch một action object trực tiếp, chúng ta dispatch một function (thunk).
    // Redux Thunk middleware sẽ intercept function này và gọi nó với `dispatch` làm đối số,
    // cho phép chúng ta thực hiện logic bất đồng bộ (như gọi API) trước khi dispatch action cuối cùng.
    dispatch(addProduct(newProduct));

    // Sau khi dispatch, reset form và điều hướng về trang giỏ hàng/sản phẩm (tùy ý)
    setProduct({
      name: '',
      price: '',
      description: '',
      catalogs: '',
    });
    // Điều hướng đến trang giỏ hàng sau khi thêm thành công (tùy chọn)
    navigate('/'); // Điều hướng về trang chính (ProductList)
    alert('Sản phẩm đang được thêm. Kiểm tra console để xem quá trình mô phỏng API!');
  };

  return (
    <div className="container">
      <h2 className="mb-4 text-center">Thêm Sản phẩm Mới</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Giá</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Mô tả</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="catalogs" className="form-label">Danh mục (phân cách bằng dấu phẩy)</label>
          <input
            type="text"
            className="form-control"
            id="catalogs"
            name="catalogs"
            value={product.catalogs}
            onChange={handleChange}
            placeholder="Electronics, Computers, Accessories"
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          <i className="bi bi-plus-circle me-2"></i>Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default ProductForm;