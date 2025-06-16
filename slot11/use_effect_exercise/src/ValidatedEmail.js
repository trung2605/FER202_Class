import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

// Hàm xác thực địa chỉ email
const validateEmail = (email) => {
  // Biểu thức chính quy (regex) để kiểm tra định dạng email cơ bản
  // Regex này kiểm tra cấu trúc "tên@tên_miền.đuôi"
  // Nó cho phép chữ cái, số, dấu chấm, gạch ngang trước @ và sau @
  // Đuôi ít nhất 2 ký tự
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function ValidatedEmail() {
  const [email, setEmail] = useState(""); // State lưu trữ giá trị email
  const [isValid, setIsValid] = useState(true); // State theo dõi tính hợp lệ của email
  const [errorMessage, setErrorMessage] = useState(""); // State lưu thông báo lỗi

  // useEffect để thực hiện xác thực mỗi khi giá trị email thay đổi
  useEffect(() => {
    // Nếu email rỗng, coi như hợp lệ (hoặc bạn có thể thay đổi logic này)
    if (email === "") {
      setIsValid(true);
      setErrorMessage("");
      return;
    }

    const isValidEmail = validateEmail(email);
    setIsValid(isValidEmail); // Cập nhật tính hợp lệ
    if (!isValidEmail) {
      setErrorMessage("Địa chỉ email không hợp lệ!"); // Cập nhật thông báo lỗi nếu không hợp lệ
    } else {
      setErrorMessage(""); // Xóa thông báo lỗi nếu hợp lệ
    }
  }, [email]); // useEffect sẽ chạy lại mỗi khi email thay đổi

  // Hàm xử lý khi form được gửi (ví dụ: in email ra console)
  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    if (isValid) {
      alert(`Email hợp lệ đã được gửi: ${email}`);
      console.log("Email hợp lệ:", email);
      // Ở đây bạn có thể thêm logic gửi dữ liệu đi
    } else {
      alert("Vui lòng nhập địa chỉ email hợp lệ trước khi gửi.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="validatedEmail">
        <Form.Label>Nhập địa chỉ Email</Form.Label>
        <Form.Control
          type="email" // Sử dụng type="email" để trình duyệt cung cấp tính năng xác thực cơ bản
          placeholder="example@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Cập nhật giá trị khi người dùng thay đổi
          isValid={isValid && email !== ""} // Chỉ hiển thị hợp lệ khi có giá trị và hợp lệ
          isInvalid={!isValid && email !== ""} // Chỉ hiển thị không hợp lệ khi có giá trị và không hợp lệ
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage} {/* Hiển thị thông báo lỗi nếu không hợp lệ */}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isValid || email === ""}>
        Gửi Email
      </Button>
    </Form>
  );
}

export default ValidatedEmail;