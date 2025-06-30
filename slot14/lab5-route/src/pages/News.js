// src/pages/News.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import newsList from '../data/newsData'; // Import newsList từ data

// 1. Khởi tạo một đối tượng rỗng để lưu trữ các URL ảnh đã được Webpack xử lý
const allImages = {}; // Đổi tên biến để rõ ràng hơn, có thể là `eventImages` như trước

// 2. Hàm này sẽ tự động import tất cả các hình ảnh từ thư mục được chỉ định
// và lưu URL đã xử lý vào đối tượng `allImages`
function importAll(r) {
  r.keys().forEach((key) => {
    // 'key' ở đây là đường dẫn tương đối của file trong context, ví dụ: './event-1.jpg'
    const fileName = key.replace('./', ''); // Cắt bỏ './' để có "event-1.jpg"

    // TẠO KHÓA TRONG `allImages` KHỚP VỚI GIÁ TRỊ `news.images`
    // Vì `news.images` là "images/event-1.jpg", chúng ta cần tiền tố "images/" cho khóa.
    // `r(key)` sẽ trả về URL cuối cùng mà Webpack tạo ra (ví dụ: "/static/media/event-1.a1b2c3d4.jpg")
    allImages["images/" + fileName] = r(key);
  });
}

// 3. Sử dụng `require.context` để "nói" với Webpack:
//    - Tham số 1: Đường dẫn tương đối đến thư mục chứa ảnh (từ file News.js)
//      `../assets/images` vì News.js nằm trong `src/pages` và ảnh nằm trong `src/assets/images`
//    - Tham số 2: `false` nghĩa là không tìm kiếm trong các thư mục con
//    - Tham số 3: Regex để khớp với các loại file ảnh (.png, .jpg, .jpeg, .svg)
importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));


// Định nghĩa các style (giữ nguyên hoặc điều chỉnh theo ý muốn của bạn)
const cardStyle = {
  minHeight: "350px",
  maxHeight: "350px",
  display: "flex",
  flexDirection: "column",
};

// STYLE CHO BACKGROUND IMAGE BLOCK
const imageBlockStyle = {
  height: "200px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderTopLeftRadius: 'calc(0.25rem - 1px)',
  borderTopRightRadius: 'calc(0.25rem - 1px)',
};

const cardBodyStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
};

const titleStyle = {
  fontSize: "16px",
  marginBottom: "8px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  minHeight: "55px", 
};

const textStyle = {
  fontSize: "14px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  minHeight: "60px", 
};


function News({ data }) {
  // Nếu có prop `data` thì dùng nó (ví dụ khi gọi từ Home.js), nếu không thì dùng `newsList` mặc định.
  const newsToDisplay = data || newsList; 

  return (
    <Container className="my-4">
      {/* Chỉ hiển thị tiêu đề "News Category" nếu không có prop `data` (tức là trang News chính) */}
      {!data && <h2>News Category</h2>} 

      <Row xs={1} md={2} lg={4} className="g-4 mt-4">
        {newsToDisplay.map(news => (
          <Col key={news.id}>
            <Card className="h-100 news-card" style={cardStyle}>
              {/* SỬ DỤNG allImages ĐỂ GÁN BACKGROUND-IMAGE */}
              {/* `news.images` (ví dụ "images/event-1.jpg") sẽ là khóa để tra cứu trong `allImages`.
                  `allImages[news.images]` sẽ trả về URL đã được Webpack xử lý,
                  đó là URL mà trình duyệt có thể tải được.
              */}
              {allImages[news.images] ? (
                <div 
                  style={{ 
                    ...imageBlockStyle, 
                    backgroundImage: `url(${allImages[news.images]})` 
                  }} 
                  // Alt text cho background-image không trực tiếp như thẻ <img>.
                  // Nếu cần cho SEO/accessibility, cân nhắc thẻ <img> ẩn hoặc aria-label.
                >
                  {/* Có thể thêm overlay hoặc nội dung khác vào đây nếu muốn */}
                </div>
              ) : (
                // Thông báo lỗi nếu ảnh không được tìm thấy trong allImages (thường do sai khóa hoặc đường dẫn)
                <div style={{ ...imageBlockStyle, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                  Image not found: {news.images}
                </div>
              )}
              
              <Card.Body style={cardBodyStyle}>
                <Card.Title style={titleStyle}>{news.title}</Card.Title>
                <Card.Text style={textStyle}>{news.description}</Card.Text>
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