// src/App.js
import React from 'react';
import './App.css'; // Giữ lại nếu bạn có CSS tùy chỉnh cho App.js
import Exercise3 from './Exercise3'; 
import Exercise4 from './Exercise4'; 
import Exercise5 from './Exercise5'; 


function App() {
  return (
    <div className="App">
      {/* Bạn có thể đặt các thành phần chung của ứng dụng ở đây, ví dụ: Navbar, Sidebar */}
      
      {/* Render component Exercise1 */}
      <Exercise3 />
      <Exercise4 />
      <Exercise5 />

      {/* Có thể có các thành phần khác của ứng dụng dưới đây */}
    </div>
  );
}

export default App;