import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutBanner from '../assets/images/banner.png'; 
// Import các hiệu ứng từ react-awesome-reveal
import { Fade, Slide, Zoom } from 'react-awesome-reveal'; 

function About() {
  return (
    <Container className="my-5"> 
      {/* Tiêu đề chính - Fade in từ trên xuống */}
      <Row className="justify-content-center mb-5 text-center">
        <Col md={8}>
          <Fade direction="down" triggerOnce> {/* triggerOnce: animation chỉ chạy 1 lần */}
            <h1 className="display-4 fw-bold mb-3" style={{ color: '#007bff' }}> 
              Chào mừng đến với Blog Tin tức & Kiến thức của chúng tôi!
            </h1>
          </Fade>
          <Fade direction="down" delay={200} triggerOnce> {/* delay: trễ 200ms sau tiêu đề */}
            <p className="lead text-muted">
              Khám phá những câu chuyện hấp dẫn, nâng cao kiến thức của bạn và cùng tham gia vào hành trình học hỏi.
            </p>
          </Fade>
        </Col>
      </Row>

      {/* Phần giới thiệu chung - Ảnh từ trái vào, Text từ phải vào */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          {aboutBanner && (
            <Slide direction="left" triggerOnce>
              <Image 
                src={aboutBanner} 
                fluid 
                rounded 
                alt="About Us Banner" 
                className="shadow-sm" 
              />
            </Slide>
          )}
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <Slide direction="right" triggerOnce>
            <h3 className="fw-bold mb-3" style={{ color: '#343a40' }}>Về Dự án React của chúng tôi</h3>
            <p className="fs-5">
              Dự án này là một minh chứng cho sức mạnh của React trong việc xây dựng các ứng dụng web đa năng. Chúng tôi đã kết hợp những công nghệ hiện đại nhất để mang đến một trải nghiệm người dùng mượt mà và trực quan.
            </p>
            <p className="text-muted">
              Tại đây, bạn có thể dễ dàng điều hướng qua các trang khác nhau như News, Quiz, Contact, và About, mỗi trang đều được xây dựng với mục đích minh họa các tính năng cốt lõi của React và React-Bootstrap.
            </p>
          </Slide>
        </Col>
      </Row>

      {/* Phần sứ mệnh/giá trị (Ví dụ) - Zoom in cho từng cột */}
      <Row className="mb-5 text-center">
        <Col md={4} className="mb-4">
          <Zoom triggerOnce>
            <div className="p-4 border rounded shadow-sm h-100">
              <h4 className="fw-bold mb-3" style={{ color: '#28a745' }}>Đọc & Khám phá</h4>
              <p>
                Cập nhật những tin tức mới nhất và các bài viết chuyên sâu trên trang Tin tức của chúng tôi. Chúng tôi mang đến nội dung đa dạng, từ ẩm thực đến công nghệ.
              </p>
            </div>
          </Zoom>
        </Col>
        <Col md={4} className="mb-4">
          <Zoom delay={200} triggerOnce> {/* Thêm delay để animation chạy tuần tự */}
            <div className="p-4 border rounded shadow-sm h-100">
              <h4 className="fw-bold mb-3" style={{ color: '#ffc107' }}>Kiểm tra Kiến thức</h4>
              <p>
                Tham gia các câu đố vui nhộn và đầy thử thách trên trang Quiz. Kiểm tra hiểu biết của bạn và học hỏi điều mới mẻ mỗi ngày.
              </p>
            </div>
          </Zoom>
        </Col>
        <Col md={4} className="mb-4">
          <Zoom delay={400} triggerOnce> {/* Thêm delay để animation chạy tuần tự */}
            <div className="p-4 border rounded shadow-sm h-100">
              <h4 className="fw-bold mb-3" style={{ color: '#17a2b8' }}>Kết nối với chúng tôi</h4>
              <p>
                Bạn có câu hỏi hoặc muốn đóng góp? Hãy liên hệ với chúng tôi qua trang Contact. Chúng tôi luôn sẵn lòng lắng nghe ý kiến của bạn.
              </p>
            </div>
          </Zoom>
        </Col>
      </Row>

      {/* Phần Call to Action (Ví dụ) - Fade in từ dưới lên */}
      <Row className="text-center">
        <Col>
          <Fade direction="up" triggerOnce>
            <p className="fs-4 mb-4" style={{ color: '#6c757d' }}>
              Chúng tôi cam kết không ngừng cải thiện và mở rộng dự án này.
              Nếu bạn có bất kỳ ý tưởng hoặc phản hồi nào, đừng ngần ngại chia sẻ!
            </p>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default About;