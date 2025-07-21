// src/store.js

import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Import named export 'thunk' for Redux Thunk
import rootReducer from '../src/reducers/cartReducer'; // Import root reducer từ thư mục reducers
import { composeWithDevTools } from '@redux-devtools/extension'; // Cho phép sử dụng Redux DevTools

// Cấu hình Redux DevTools Extension
// composeWithDevTools giúp kết hợp middleware và enhancers, đồng thời tích hợp Redux DevTools
const composeEnhancers = composeWithDevTools({
  trace: true, // Hiển thị stack trace trong DevTools để debug dễ hơn
  traceLimit: 25, // Giới hạn số lượng stack frames
});

// Tạo Redux store
// applyMiddleware(thunk) áp dụng Redux Thunk middleware vào store
// Middleware này cho phép action creators trả về các hàm (thunks) thay vì action objects thuần túy,
// giúp chúng ta xử lý các tác vụ bất đồng bộ (như gọi API) trước khi dispatch một action thực sự.
const store = createStore(
  rootReducer, // Root reducer của ứng dụng
  composeEnhancers(applyMiddleware(thunk)) // Áp dụng Redux Thunk middleware và tích hợp DevTools
);

export default store;