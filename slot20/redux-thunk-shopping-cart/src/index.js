// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import CSS chung
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Provider giúp kết nối Redux store với React components
import store from './store'; // Import Redux store của chúng ta

// Tạo root để render ứng dụng
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render ứng dụng
root.render(
  <React.StrictMode>
    {/* Provider bao bọc toàn bộ ứng dụng React và truyền Redux store xuống */}
    {/* Bất kỳ component con nào bên trong Provider đều có thể truy cập Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();