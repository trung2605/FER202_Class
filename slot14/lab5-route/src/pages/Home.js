// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'; 

// Import các hình ảnh cho phần banner và các ảnh tròn
// Đảm bảo các file này tồn tại trong thư mục src/assets/
import BannerImage from '../assets/images/banner.png'; // Hoặc banner2.jpg, banner3.jpg tùy theo bạn muốn sử dụng
import Food1 from '../assets/images/food1.png';
import Food2 from '../assets/images/food2.png';
import Food3 from '../assets/images/food3.png';
import Food4 from '../assets/images/food4.png';
import Food5 from '../assets/images/food5.png';
import Food6 from '../assets/images/food6.png';

// Import dữ liệu tin tức từ file newsData.js
import newsList from '../data/newsData';

// Import component News
import News from './News'; // <-- Import component News từ cùng thư mục pages


function Home() {
  // Lấy 4 bài tin tức đầu tiên để hiển thị trong phần "Featured News" trên trang chủ
  const featuredNews = newsList.slice(0, 4);

  console.log('Featured News:', featuredNews); // Kiểm tra dữ liệu tin tức được lấy

  return (
    <Container className="text-center my-4">
      {/* Phần Banner Chính */}
      <Row>
        <Col>
          <Image src={BannerImage} fluid alt="Celebration Ham Banner" className="mb-3" />
        </Col>
      </Row>

      {/* Phần các Hình ảnh Tròn Nhỏ (Category/Product Quick Links) */}
      <Row className="justify-content-center mb-5">
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Image src={Food1} roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="Food Category 1" />
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Image src={Food2} roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="Food Category 2" />
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Image src={Food3} roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="Food Category 3" />
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Image src={Food4} roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="Food Category 4" />
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Image src={Food5} roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="Food Category 5" />
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Image src={Food6} roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="Food Category 6" />
        </Col>
      </Row>
      
      
      <News data={featuredNews} /> 

    </Container>
  );
}

export default Home;