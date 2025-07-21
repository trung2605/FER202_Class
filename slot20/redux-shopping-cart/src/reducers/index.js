// src/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit'; // Sử dụng combineReducers từ RTK
import cartReducer from './cartReducer'; // Import cartReducer

const rootReducer = combineReducers({
  cart: cartReducer, // Gán cartReducer cho phần state 'cart'
  // Có thể thêm các reducer khác ở đây:
  // products: productsReducer,
  // user: userReducer,
});

export default rootReducer;

// Giải thích:
// - `combineReducers` giúp kết hợp nhiều reducer nhỏ thành một reducer lớn duy nhất.
// - Trạng thái toàn bộ của ứng dụng sẽ có dạng: `{ cart: [...] }`.