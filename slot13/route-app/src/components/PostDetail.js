// src/components/PostDetail.js
import React, { useState, useEffect } from 'react'; // Import useState và useEffect
import { useParams } from 'react-router-dom'; // Import useParams

function PostDetail() {
  const { id } = useParams(); // Lấy tham số ID từ URL
  const [post, setPost] = useState(null); // Khai báo state 'post' để lưu chi tiết bài viết, khởi tạo là null

  useEffect(() => { // Sử dụng useEffect để tải dữ liệu
    // Fetch dữ liệu từ file posts.json trong thư mục public
    fetch('/posts.json')
      .then((response) => response.json()) // Chuyển đổi phản hồi thành JSON
      .then((data) => {
        // Tìm bài viết trong dữ liệu đã tải có ID khớp với ID từ URL
        const foundPost = data.find(p => p.id === id); 
        setPost(foundPost); // Cập nhật state 'post' với bài viết tìm được
      })
      .catch((error) => console.error('Error loading post:', error)); // Xử lý lỗi
  }, [id]); // Mảng phụ thuộc: useEffect sẽ chạy lại mỗi khi 'id' thay đổi

  if (!post) { // Nếu 'post' vẫn là null (chưa tải xong hoặc không tìm thấy)
    return <h2>Post not found</h2>; // Hiển thị thông báo "Post not found"
  }

  return ( // Nếu tìm thấy bài viết, hiển thị tiêu đề và nội dung
    <div>
      <h2>{post.title}</h2> {/* Hiển thị tiêu đề bài viết */}
      <p>{post.content}</p> {/* Hiển thị nội dung bài viết */}
    </div>
  );
}

export default PostDetail;