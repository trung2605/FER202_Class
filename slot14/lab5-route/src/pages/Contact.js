import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';
// Nếu bạn muốn dùng icon, cần cài đặt react-icons (npm install react-icons)
// import { FaUser, FaEnvelope, FaCity, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '', // Thêm trường email, thường có trong form liên hệ
    city: '',
    state: '',
    zip: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false); // Trạng thái này có thể không cần thiết nếu dùng validateForm
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submissionVariant, setSubmissionVariant] = useState('success'); // Để thay đổi màu Alert

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Xóa lỗi cho trường đang được thay đổi
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Tên không được để trống.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Họ không được để trống.';
    if (!formData.username.trim()) newErrors.username = 'Tên người dùng không được để trống.';
    
    // Validate Email
    if (!formData.email.trim()) {
        newErrors.email = 'Email không được để trống.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email không hợp lệ.';
    }

    if (!formData.city.trim()) newErrors.city = 'Thành phố không được để trống.';
    if (!formData.state.trim()) newErrors.state = 'Quận/Tỉnh không được để trống.';
    // Validate Zip (ví dụ: chỉ cho phép số, 5 chữ số)
    if (!formData.zip.trim()) {
        newErrors.zip = 'Mã Zip không được để trống.';
    } else if (!/^\d{5}$/.test(formData.zip)) {
        newErrors.zip = 'Mã Zip không hợp lệ (ví dụ: 12345).';
    }

    if (!formData.terms) newErrors.terms = 'Bạn phải đồng ý với các điều khoản và điều kiện.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const formIsValid = validateForm();
    setValidated(true); // Kích hoạt trạng thái validated của Form Bootstrap

    if (formIsValid) {
      setSubmissionMessage('Form đã được gửi thành công! Cảm ơn bạn đã liên hệ.');
      setSubmissionVariant('success');
      console.log('Form data:', formData);
      // Bạn có thể reset form tại đây nếu muốn:
      // setFormData({ firstName: '', lastName: '', username: '', email: '', city: '', state: '', zip: '', terms: false });
      // setValidated(false); // Reset validated state nếu bạn reset form
    } else {
      setSubmissionMessage('Vui lòng kiểm tra lại các lỗi trong form.');
      setSubmissionVariant('danger');
    }
  };

  return (
    <Container className="my-5"> {/* Tăng khoảng cách trên/dưới */}
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">Liên Hệ Với Chúng Tôi</h1>
            <p className="lead text-muted">
              Chúng tôi luôn sẵn lòng lắng nghe ý kiến từ bạn. Vui lòng điền vào form dưới đây để gửi tin nhắn cho chúng tôi.
            </p>
          </div>

          <Card className="shadow-lg p-4 mb-5 bg-white rounded"> {/* Bọc form trong Card với bóng đổ và padding */}
            <Card.Body>
              {/* Hiển thị thông báo chung */}
              {submissionMessage && <Alert variant={submissionVariant} className="mb-4">{submissionMessage}</Alert>}

              <Form noValidate onSubmit={handleSubmit}>
                {/* Dòng 1: First Name, Last Name, Username */}
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="firstName">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập tên"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName} // Hiển thị lỗi nếu có
                      isValid={validated && !errors.firstName && formData.firstName.trim() !== ''} // Hiển thị 'Looks good!'
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="lastName">
                    <Form.Label>Họ</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập họ"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                      isValid={validated && !errors.lastName && formData.lastName.trim() !== ''}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="username">
                    <Form.Label>Tên người dùng</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tên người dùng"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                      isValid={validated && !errors.username && formData.username.trim() !== ''}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* Dòng 2: Email */}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Nhập email của bạn"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                            isValid={validated && !errors.email && formData.email.trim() !== ''}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Looks good!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* Dòng 3: City, State, Zip */}
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="city">
                    <Form.Label>Thành phố</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Thành phố"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      isInvalid={!!errors.city}
                      isValid={validated && !errors.city && formData.city.trim() !== ''}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="state">
                    <Form.Label>Quận/Tỉnh</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Quận/Tỉnh"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      isInvalid={!!errors.state}
                      isValid={validated && !errors.state && formData.state.trim() !== ''}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.state}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="zip">
                    <Form.Label>Mã Zip</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Mã Zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      isInvalid={!!errors.zip}
                      isValid={validated && !errors.zip && formData.zip.trim() !== ''}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.zip}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* Checkbox Terms and Conditions */}
                <Form.Group className="mb-4"> {/* Tăng khoảng cách dưới */}
                  <Form.Check
                    type="checkbox" // Đảm bảo type là checkbox
                    label="Đồng ý với các điều khoản và điều kiện"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    isInvalid={!!errors.terms} // Hiển thị lỗi nếu không check
                    feedback={errors.terms}
                    feedbackType="invalid"
                  />
                </Form.Group>

                <Button type="submit" variant="primary" size="lg" className="w-100"> {/* Nút Submit lớn và rộng */}
                  Gửi Form
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;