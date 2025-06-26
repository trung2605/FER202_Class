import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navigation from './Navigation';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import PostPage from './PostPage';
import PostDetail from './PostDetail';
import ProtectedRoute from './ProtectedRoute';
import NotFoundPage from './NotFoundPage';

import './App.css'; // CSS chung
import './LoginForm.css';
import './PostPage.css';
import './PostDetail.css';
import './Navbar.css';


function App() {
  return (
    <Router>
      <AuthProvider> {/* Bọc toàn bộ ứng dụng bằng AuthProvider */}
        <Navigation />
        <div className="container"> {/* Tạo container trong CSS để căn giữa nội dung */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/posts" element={<PostPage />} />
              <Route path="/posts/:id" element={<PostDetail />} />
            </Route>

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;