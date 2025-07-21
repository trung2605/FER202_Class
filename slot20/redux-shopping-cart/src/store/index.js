// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers'; // Import rootReducer đã tạo

const store = configureStore({
  reducer: rootReducer, // Truyền rootReducer vào đây
  // devTools: true // Mặc định là true trong môi trường dev, có thể tắt nếu cần
});

export default store;

// Giải thích:
// - `configureStore` là một wrapper của `createStore` nhưng với các cấu hình mặc định tốt hơn,
//   bao gồm Redux DevTools, Redux Thunk middleware, và kiểm tra tính bất biến/serializability.
// - Chỉ cần truyền `rootReducer` vào thuộc tính `reducer`.