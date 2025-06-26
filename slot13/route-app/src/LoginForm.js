import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { loginUser } from './authApi';
import './LoginForm.css'; // Tạo file CSS này

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); // Sử dụng hook useAuth để truy cập hàm login từ context
  const navigate = useNavigate(); // Hook để điều hướng

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset lỗi

    if (!username || !password) {
      setError('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.');
      return;
    }

    // Gửi yêu cầu đăng nhập đến API
    const result = await loginUser(username, password);

    if (result.success) {
      login(result.user); // Cập nhật trạng thái đăng nhập trong context
      navigate('/posts'); // Chuyển hướng đến trang /posts
    } else {
      setError(result.message); // Hiển thị lỗi từ API
    }
  };

  return (
    <div className="login-form-container">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Tên đăng nhập:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Đăng nhập</button>
      </form>
    </div>
  );
}

export default LoginForm;