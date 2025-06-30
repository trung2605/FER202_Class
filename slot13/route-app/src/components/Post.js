// src/components/Post.js
import React, { useState, useEffect } from 'react'; // Import useState và useEffect
import { Link } from 'react-router-dom';

function Post() {
  const [posts, setPosts] = useState([]); // Khai báo state 'posts' để lưu danh sách bài viết, khởi tạo là một mảng rỗng

  useEffect(() => { // Sử dụng useEffect để thực hiện side effect (tải dữ liệu)
    // Fetch dữ liệu từ file posts.json trong thư mục public
    fetch('/posts.json') // Gửi yêu cầu HTTP GET đến '/posts.json'
      .then((response) => { // Xử lý phản hồi từ server
        // Kiểm tra nếu phản hồi không hợp lệ (status code không phải 2xx)
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Ném lỗi nếu có vấn đề về mạng
        }
        return response.json(); // Chuyển đổi phản hồi thành JSON
      })
      .then((data) => setPosts(data)) // Cập nhật state 'posts' với dữ liệu đã tải
      .catch((error) => { // Xử lý lỗi nếu quá trình fetch thất bại
        console.error('Error loading posts:', error); // Log lỗi ra console
        // Bạn có thể hiển thị thông báo lỗi cho người dùng ở đây
      });
  }, []); // Mảng phụ thuộc rỗng: useEffect chỉ chạy một lần sau lần render đầu tiên

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map(post => ( // Duyệt qua mảng 'posts' để hiển thị từng bài viết
          <li key={post.id}> {/* Mỗi item trong danh sách phải có một 'key' duy nhất */}
            <Link to={`/post/${post.id}`}>{post.title}</Link> {/* Liên kết đến trang chi tiết bài viết */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;