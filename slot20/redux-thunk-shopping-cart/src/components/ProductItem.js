// src/components/ProductItem.js

import React from 'react';
import { useDispatch } from 'react-redux'; // Hook để dispatch actions
import { addToCart } from '../actions/productActions'; // Import action creator

// Component để hiển thị thông tin của một sản phẩm
// Nhận `product` làm props từ ProductList
const ProductItem = ({ product }) => {
  const dispatch = useDispatch(); // Khởi tạo dispatch hook

  // Hàm xử lý khi nhấn nút "Add to Cart"
  const handleAddToCart = () => {
    // Dispatch action ADD_TO_CART với thông tin sản phẩm
    // Khi action này được dispatch, cartReducer sẽ xử lý để thêm/cập nhật sản phẩm vào giỏ hàng
    dispatch(addToCart(product));
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={`https://via.placeholder.com/200x150?text=${product.name.replace(/ /g, '+')}`}
          className="card-img-top"
          alt={product.name}
          style={{ objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">{product.description}</p>
          <ul className="list-inline mb-2">
            {product.catalogs.map((catalog, index) => (
              <li key={index} className="list-inline-item badge bg-info text-dark me-1">
                {catalog}
              </li>
            ))}
          </ul>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <h4 className="card-price mb-0 text-success">${product.price.toFixed(2)}</h4>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              <i className="bi bi-cart-plus me-2"></i>Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;