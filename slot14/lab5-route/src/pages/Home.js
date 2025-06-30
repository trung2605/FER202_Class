// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Image, Carousel  } from 'react-bootstrap'; 

// Import các hình ảnh banner và food trực tiếp từ src/assets/images
// Webpack sẽ xử lý các import này thành các URL hợp lệ
import BannerImage from '../assets/images/banner.png'; 
import BannerImage2 from '../assets/images/banner2.jpg';
import BannerImage3 from '../assets/images/banner3.jpg';
import Food1 from '../assets/images/food1.png'; //
import Food2 from '../assets/images/food2.png'; //
import Food3 from '../assets/images/food3.png'; //
import Food4 from '../assets/images/food4.png'; //
import Food5 from '../assets/images/food5.png'; //
import Food6 from '../assets/images/food6.png'; //

// Import dữ liệu tin tức từ file newsData.js
import newsList from '../data/newsData';

// Import component News
import News from './News'; 

const mainBanners = [
  {
    src: BannerImage, 
    alt: "Celebration Ham Banner",
    captionTitle: "Chào mừng bạn đến với Cửa hàng!",
    captionText: "Khám phá các ưu đãi đặc biệt và sản phẩm mới nhất."
  },
  {
    src: BannerImage2, // Sử dụng banner thứ 2
    alt: "New Arrivals Promotion",
    captionTitle: "Sản phẩm mới về!",
    captionText: "Đừng bỏ lỡ bộ sưu tập độc đáo của chúng tôi."
  },
  {
    src: BannerImage3, // Sử dụng banner thứ 3
    alt: "Seasonal Discount",
    captionTitle: "Giảm giá theo mùa",
    captionText: "Ưu đãi hấp dẫn cho các món ăn yêu thích của bạn."
  }
];
function Home() {
  // Lấy 4 bài tin tức đầu tiên từ newsList để hiển thị làm tin nổi bật
  const featuredNews = newsList.slice(4, 8);

  return (
    <Container className="text-center my-4">
      {/* Phần Banner Chính */}
            <Row className="mb-5"> {/* Thêm margin bottom để tạo khoảng cách */}
        <Col>
          <Carousel 
            indicators={true} // Hiển thị các chấm tròn chỉ báo
            controls={true}  // Hiển thị nút điều hướng (mũi tên trái/phải)
            interval={3000}  // Tự động chuyển slide sau 3 giây (3000ms), có thể bỏ đi nếu không muốn tự động
          > 
            {mainBanners.map((banner, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100" // Đảm bảo hình ảnh chiếm toàn bộ chiều rộng
                  src={banner.src}
                  alt={banner.alt}
                  style={{ maxHeight: '450px', objectFit: 'cover' }} // Giới hạn chiều cao và căn chỉnh hình ảnh
                />
                <Carousel.Caption>
                  {/* Bạn có thể tùy chỉnh hiển thị caption hoặc bỏ qua nếu banner đã có text sẵn */}
                  <h3>{banner.captionTitle}</h3>
                  <p>{banner.captionText}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
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
      
    

      <hr className="my-5" /> 

      <h2 className="text-start mb-4">Featured News</h2> 
      {/* Gọi component News và truyền dữ liệu featuredNews vào */}
      <News data={featuredNews} /> 

    </Container>
  );
}

export default Home;