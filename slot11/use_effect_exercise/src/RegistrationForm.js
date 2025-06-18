import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'; // Import Row và Col

// Hàm xác thực địa chỉ email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Hàm xác thực mật khẩu
// Điều kiện: trên 8 ký tự
const validatePassword = (password) => {
  return password.length >= 8;
};

function RegistrationForm() {
  // State cho Email
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  // State cho Mật khẩu
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  // useEffect để xác thực Email khi giá trị email thay đổi
  useEffect(() => {
    if (email === "") {
      setIsValidEmail(true);
      setEmailErrorMessage("");
      return;
    }

    const emailValid = validateEmail(email);
    setIsValidEmail(emailValid);
    if (!emailValid) {
      setEmailErrorMessage("Địa chỉ email không hợp lệ!");
    } else {
      setEmailErrorMessage("");
    }
  }, [email]);

  // useEffect để xác thực Mật khẩu khi giá trị password thay đổi
  useEffect(() => {
    if (password === "") {
      setIsValidPassword(true);
      setPasswordErrorMessage("");
      return;
    }

    const passwordValid = validatePassword(password);
    setIsValidPassword(passwordValid);
    if (!passwordValid) {
      setPasswordErrorMessage("Mật khẩu phải có ít nhất 8 ký tự!");
    } else {
      setPasswordErrorMessage("");
    }
  }, [password]);

  // Hàm xử lý khi form được gửi
  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Kiểm tra lại lần cuối trước khi gửi
    const finalEmailValid = validateEmail(email);
    const finalPasswordValid = validatePassword(password);

    setIsValidEmail(finalEmailValid);
    setIsValidPassword(finalPasswordValid);

    // Nếu cả hai đều hợp lệ, thì xử lý logic gửi dữ liệu
    if (finalEmailValid && finalPasswordValid) {
      alert(`Đăng ký thành công!\nEmail: ${email}\nMật khẩu: ${password}`);
      console.log("Dữ liệu đăng ký:", { email, password });
      // Ở đây bạn có thể gọi API để gửi dữ liệu lên server
    } else {
      // Hiển thị lại thông báo lỗi nếu có
      if (!finalEmailValid && email.trim() !== "") { // Thêm .trim() để xử lý khoảng trắng
        setEmailErrorMessage("Địa chỉ email không hợp lệ!");
      }
      if (!finalPasswordValid && password.trim() !== "") { // Thêm .trim() để xử lý khoảng trắng
        setPasswordErrorMessage("Mật khẩu phải có ít nhất 8 ký tự!");
      }
      alert("Vui lòng kiểm tra lại thông tin đăng ký.");
    }
  };

  // Nút Gửi chỉ được kích hoạt khi cả hai trường đều hợp lệ và không rỗng
  const isFormValid = isValidEmail && email.trim() !== "" && isValidPassword && password.trim() !== "";

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm"> {/* Thêm padding, border cho form */}
      <h3 className="mb-4 text-center">Đăng Ký Tài Khoản</h3>

      {/* Trường Email */}
      {/* Sử dụng as={Row} và Col để căn chỉnh label sang trái */}
      <Form.Group as={Row} className="mb-3" controlId="registrationEmail">
        <Form.Label column sm="3">Email:</Form.Label> {/* column sm="3" cho label */}
        <Col sm="9"> {/* Col sm="9" cho input */}
          <Form.Control
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isValid={isValidEmail && email.trim() !== ""}
            isInvalid={!isValidEmail && email.trim() !== ""}
          />
          <Form.Control.Feedback type="invalid">
            {emailErrorMessage}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      {/* Trường Mật khẩu */}
      {/* Áp dụng tương tự cho trường mật khẩu để căn chỉnh label sang trái */}
      <Form.Group as={Row} className="mb-3" controlId="registrationPassword">
        <Form.Label column sm="3">Mật khẩu:</Form.Label> {/* column sm="3" cho label */}
        <Col sm="9"> {/* Col sm="9" cho input */}
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu (ít nhất 8 ký tự)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isValid={isValidPassword && password.trim() !== ""}
            isInvalid={!isValidPassword && password.trim() !== ""}
          />
          <Form.Control.Feedback type="invalid">
            {passwordErrorMessage}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Đăng Ký
      </Button>
    </Form>
  );
}

export default RegistrationForm;