// src/pages/News.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import newsList from '../data/newsData';


const eventImages = {};
function importAllEventImages(r) {
  r.keys().forEach((key) => {
    const fileName = key.replace('./', ''); // fileName sẽ là "event-1.jpg"
    // LƯU Ý QUAN TRỌNG: eventImages sẽ lưu trữ các đường dẫn ảnh đã được Webpack xử lý
    // và bạn cần làm cho khóa này khớp với giá trị `news.images` của bạn.
    // Nếu news.images của bạn là "images/event-1.jpg", thì bạn cần thêm "images/" vào khóa.
    eventImages["images/" + fileName] = r(key); // <--- CHỈNH SỬA Ở ĐÂY ĐỂ KHỚP VỚI newsData.js
  });
}
// Tham số thứ hai (false) là không tìm kiếm trong thư mục con.
// Tham số thứ ba (/\.(png|jpe?g|svg)$/) là regex để khớp với các loại file ảnh.
importAllEventImages(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

function News({ data }) {
  const newsToDisplay = data || newsList; // Quan trọng: Dùng data || newsList để đảm bảo hoạt động khi không truyền props data

  return (
    <Container className="my-4">
      {!data && <h2>News Category</h2>} 

      <Row xs={1} md={2} lg={4} className="g-4 mt-4">
        {newsToDisplay.map(news => (
          <Col key={news.id}>
            <Card className="h-100 news-card">
              {news.images ? (
                <Card.Img variant="top" src={`../assets/images${news.images}` || eventImages[`images${news.images}`]} alt={news.title} />
              ) : (
                <div style={{ height: '180px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                  Image not found: {news.images}
                </div>
              )}
              <Card.Body className="news-card-body">
                <Card.Title className="news-card-title">{news.title}</Card.Title>
                <Card.Text className="news-card-description">
                  {news.description.length > 100 ? news.description.substring(0, 100) + '...' : news.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                 <a href="/news" className="text-decoration-none">Read more</a> 
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;