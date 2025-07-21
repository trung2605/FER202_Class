// src/components/Cart.js

import React from 'react';
import { useSelector } from 'react-redux'; // Hook để truy cập state từ Redux store
import CartItem from './CartItem'; // Import component CartItem

// Component hiển thị giỏ hàng
const Cart = () => {
  // Sử dụng useSelector để lấy danh sách các sản phẩm trong giỏ hàng từ Redux store
  // `state.cart.cartItems` truy cập đến slice `cart` trong rootReducer, và lấy mảng `cartItems`
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Tính tổng chi phí của giỏ hàng
  const totalCost = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h2 className="mb-4 text-center">Giỏ hàng của bạn</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          Giỏ hàng của bạn trống. Vui lòng thêm sản phẩm!
        </div>
      ) : (
        <div className="card shadow-sm">
          <ul className="list-group list-group-flush">
            {cartItems.map((item) => (
              // Render CartItem cho mỗi sản phẩm trong giỏ hàng
              <CartItem key={item.product.id} item={item} />
            ))}
          </ul>
          <div className="card-footer d-flex justify-content-end">
            <h4 className="total-cost mb-0">Tổng cộng: ${totalCost.toFixed(2)}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;