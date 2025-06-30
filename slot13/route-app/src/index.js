// src/index.js
import React from 'react'; // Import thư viện React
import ReactDOM from 'react-dom/client'; // Import ReactDOM để render ứng dụng
import './index.css'; // Import file CSS toàn cục
import App from './App'; // Import component App
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals (cho đo lường hiệu suất)
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root')); // Tạo root DOM

root.render( // Render ứng dụng React
  <React.StrictMode> {/* Chế độ nghiêm ngặt của React */}
    <BrowserRouter> {/* Bọc ứng dụng trong BrowserRouter để kích hoạt định tuyến */}
      <App /> {/* Component gốc của ứng dụng */}
    </BrowserRouter>
  </React.StrictMode>
);

// Nếu bạn muốn bắt đầu đo lường hiệu suất trong ứng dụng của mình, hãy truyền một hàm
// để ghi lại kết quả (ví dụ: reportWebVitals(console.log))
// hoặc gửi đến một điểm cuối phân tích.
reportWebVitals();