// src/components/CartItem.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../actions/productActions'; // Import action creators

// Component hiển thị một sản phẩm trong giỏ hàng
const CartItem = ({ item }) => {
  const dispatch = useDispatch(); // Khởi tạo dispatch hook

  // Hàm xử lý khi thay đổi số lượng
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      // Dispatch action UPDATE_QUANTITY để cập nhật số lượng sản phẩm
      dispatch(updateQuantity(item.product.id, newQuantity));
    }
  };

  // Hàm xử lý khi nhấn nút "Remove"
  const handleRemoveClick = () => {
    // Dispatch action REMOVE_FROM_CART để xóa sản phẩm khỏi giỏ hàng
    dispatch(removeFromCart(item.product.id));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          src={`https://via.placeholder.com/50x50?text=${item.product.name.replace(/ /g, '+')}`}
          alt={item.product.name}
          className="me-3 rounded"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
        <div>
          <h6 className="my-0">{item.product.name}</h6>
          <small className="text-muted">${item.product.price.toFixed(2)}</small>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <input
          type="number"
          min="1"
          className="form-control form-control-sm text-center"
          value={item.quantity}
          onChange={handleQuantityChange}
          style={{ width: '70px' }}
        />
        <span className="ms-3 me-3 fw-bold">
          ${(item.product.price * item.quantity).toFixed(2)}
        </span>
        <button className="btn btn-danger btn-sm" onClick={handleRemoveClick}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </li>
  );
};

export default CartItem;