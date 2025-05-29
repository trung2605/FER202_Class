import React from 'react';
import { Card } from 'react-bootstrap'; // Import Card component từ react-bootstrap

// Component CarCard nhận các props: imageSrc, text, và borderColor
const CarCard = ({ imageSrc, text, borderColor }) => {
  // Style inline để đặt màu viền động
  const cardStyle = {
    border: `5px solid ${borderColor}`, // Thiết lập viền với màu được truyền vào
    borderRadius: '8px', // Bo tròn góc cho đẹp mắt
    overflow: 'hidden', // Đảm bảo nội dung không tràn ra ngoài viền bo tròn
    width: '100%', // Đảm bảo thẻ chiếm toàn bộ chiều rộng của cột
    height: 'auto', // Chiều cao tự động
  };

  return (
    // Sử dụng Card component từ react-bootstrap
    // Áp dụng style và thêm className 'mb-3' để có margin dưới
    <Card style={cardStyle} className="mb-3">
      {/* Card.Img để hiển thị ảnh. top để ảnh nằm trên cùng */}
      <Card.Img variant="top" src={imageSrc} alt="Car" />
      {/* Card.Body để chứa nội dung text */}
      <Card.Body>
        {/* Card.Text để hiển thị đoạn văn bản */}
        <Card.Text style={{ color: 'black' }}> {/* Đặt màu chữ đen để dễ đọc */}
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CarCard;