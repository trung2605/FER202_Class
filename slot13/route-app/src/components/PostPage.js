import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Dùng axios để lấy bài viết
import './PostPage.css'; // Tạo file CSS này

const API_URL = 'http://localhost:3001';

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts`);
        setPosts(response.data);
      } catch (err) {
        setError('Không thể tải bài viết.');
        console.error('Lỗi khi tải bài viết:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="post-container">Đang tải bài viết...</div>;
  if (error) return <div className="post-container error-message">{error}</div>;

  return (
    <div className="post-container">
      <h2>Các bài viết</h2>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
            <p className="post-meta">Tác giả: {post.author} | Ngày: {post.date}</p>
            <p>{post.content.substring(0, 100)}...</p> {/* Hiển thị một phần nội dung */}
            <Link to={`/posts/${post.id}`} className="read-more">Đọc thêm</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPage;