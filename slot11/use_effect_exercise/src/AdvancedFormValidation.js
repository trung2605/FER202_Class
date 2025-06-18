import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function AdvancedFormValidation() {
  // State cho TextBox (Tên)
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  // State cho Radio Button (Giới tính)
  const [gender, setGender] = useState('');
  const [isGenderValid, setIsGenderValid] = useState(true);
  const [genderErrorMessage, setGenderErrorMessage] = useState('');

  // State cho Dropdown (Quốc gia)
  const [country, setCountry] = useState('');
  const [isCountryValid, setIsCountryValid] = useState(true);
  const [countryErrorMessage, setCountryErrorMessage] = useState('');

  // State cho Checkbox (Đồng ý điều khoản)
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isAgreeTermsValid, setIsAgreeTermsValid] = useState(true);
  const [agreeTermsErrorMessage, setAgreeTermsErrorMessage] = useState('');

  // --- State MỚI cho TextBox (Xã) ---
  const [commune, setCommune] = useState('');
  const [isCommuneValid, setIsCommuneValid] = useState(true);
  const [communeErrorMessage, setCommuneErrorMessage] = useState('');


  // --- Hàm xác thực cho từng trường ---

  const validateName = (value) => {
    return value.trim().length >= 2;
  };

  const validateGender = (value) => {
    return value !== '';
  };

  const validateCountry = (value) => {
    return value !== '';
  };

  const validateAgreeTerms = (value) => {
    return value === true;
  };

  // --- Hàm xác thực MỚI cho Xã ---
  const validateCommune = (value) => {
    // Ví dụ: Xã phải có ít nhất 3 ký tự và không được rỗng
    return value.trim().length >= 3;
  };

  // --- useEffect để theo dõi và xác thực từng trường ---

  useEffect(() => {
    const valid = validateName(name);
    setIsNameValid(valid);
    if (!valid && name.trim() !== '') {
      setNameErrorMessage('Tên phải có ít nhất 2 ký tự và không được để trống.');
    } else {
      setNameErrorMessage('');
    }
  }, [name]);

  useEffect(() => {
    const valid = validateGender(gender);
    setIsGenderValid(valid);
    if (!valid && gender === '') {
      setGenderErrorMessage('Vui lòng chọn giới tính.');
    } else {
      setGenderErrorMessage('');
    }
  }, [gender]);

  useEffect(() => {
    const valid = validateCountry(country);
    setIsCountryValid(valid);
    if (!valid && country === '') {
      setCountryErrorMessage('Vui lòng chọn quốc gia.');
    } else {
      setCountryErrorMessage('');
    }
  }, [country]);

  useEffect(() => {
    const valid = validateAgreeTerms(agreeTerms);
    setIsAgreeTermsValid(valid);
    if (!valid && agreeTerms === false) {
      setAgreeTermsErrorMessage('Bạn phải đồng ý với các điều khoản.');
    } else {
      setAgreeTermsErrorMessage('');
    }
  }, [agreeTerms]);

  // --- useEffect MỚI cho Xã ---
  useEffect(() => {
    const valid = validateCommune(commune);
    setIsCommuneValid(valid);
    if (!valid && commune.trim() !== '') {
      setCommuneErrorMessage('Xã phải có ít nhất 3 ký tự và không được để trống.');
    } else {
      setCommuneErrorMessage('');
    }
  }, [commune]);

  // --- Hàm xử lý gửi form ---

  const handleSubmit = (event) => {
    event.preventDefault();

    // Chạy lại tất cả xác thực một lần nữa khi submit
    const finalNameValid = validateName(name);
    const finalGenderValid = validateGender(gender);
    const finalCountryValid = validateCountry(country);
    const finalAgreeTermsValid = validateAgreeTerms(agreeTerms);
    const finalCommuneValid = validateCommune(commune); // Xác thực trường Xã

    // Cập nhật lại state xác thực để hiển thị lỗi ngay lập tức
    setIsNameValid(finalNameValid);
    setIsGenderValid(finalGenderValid);
    setIsCountryValid(finalCountryValid);
    setIsAgreeTermsValid(finalAgreeTermsValid);
    setIsCommuneValid(finalCommuneValid); // Cập nhật state cho Xã

    // Kiểm tra tổng thể form
    if (finalNameValid && finalGenderValid && finalCountryValid && finalAgreeTermsValid && finalCommuneValid) {
      alert('Form hợp lệ! Dữ liệu đã được gửi:\n' +
            `Tên: ${name}\n` +
            `Giới tính: ${gender}\n` +
            `Quốc gia: ${country}\n` +
            `Xã: ${commune}\n` + // Thêm dữ liệu xã vào thông báo
            `Đồng ý điều khoản: ${agreeTerms}`);
      console.log('Dữ liệu form:', { name, gender, country, commune, agreeTerms });
      // Ở đây bạn có thể thêm logic gửi dữ liệu lên server
    } else {
      alert('Vui lòng kiểm tra lại tất cả các trường.');
    }
  };

  // Xác định trạng thái của nút Submit
  const isFormFullyValid =
    isNameValid && name.trim() !== '' &&
    isGenderValid && gender !== '' &&
    isCountryValid && country !== '' &&
    isAgreeTermsValid && agreeTerms === true &&
    isCommuneValid && commune.trim() !== ''; // Bao gồm trạng thái của trường Xã

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <h3 className="mb-4 text-center">Form Đăng Ký Thông Tin</h3>

      {/* 1. TextBox: Tên */}
      <Form.Group as={Row} className="mb-3" controlId="formName">
        <Form.Label column sm="3">Tên của bạn:</Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Nhập tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isValid={isNameValid && name.trim() !== ''}
            isInvalid={!isNameValid && name.trim() !== ''}
          />
          <Form.Control.Feedback type="invalid">
            {nameErrorMessage}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      {/* 2. Radio Button: Giới tính */}
      <Form.Group as={Row} className="mb-3" controlId="formGender">
        <Form.Label column sm="3">Giới tính:</Form.Label>
        <Col sm="9">
          <div className="d-flex align-items-center" style={{ minHeight: '38px' }}>
            <Form.Check
              inline
              type="radio"
              label="Nam"
              name="gender"
              id="genderMale"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
              isInvalid={!isGenderValid && gender === ''}
            />
            <Form.Check
              inline
              type="radio"
              label="Nữ"
              name="gender"
              id="genderFemale"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
              isInvalid={!isGenderValid && gender === ''}
            />
          </div>
          {!isGenderValid && gender === '' && (
            <div className="invalid-feedback d-block">
              {genderErrorMessage}
            </div>
          )}
        </Col>
      </Form.Group>

      {/* 3. Dropdown (Select): Quốc gia */}
      <Form.Group as={Row} className="mb-3" controlId="formCountry">
        <Form.Label column sm="3">Quốc gia:</Form.Label>
        <Col sm="9">
          <Form.Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            isValid={isCountryValid && country !== ''}
            isInvalid={!isCountryValid && country === ''}
          >
            <option value="">Chọn quốc gia của bạn</option>
            <option value="Vietnam">Việt Nam</option>
            <option value="USA">Hoa Kỳ</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Úc</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {countryErrorMessage}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      {/* --- 4. TextBox MỚI: Xã --- */}
      <Form.Group as={Row} className="mb-3" controlId="formCommune">
        <Form.Label column sm="3">Xã:</Form.Label> {/* Nhãn "Xã" bên trái */}
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Nhập tên xã/phường"
            value={commune}
            onChange={(e) => setCommune(e.target.value)}
            isValid={isCommuneValid && commune.trim() !== ''}
            isInvalid={!isCommuneValid && commune.trim() !== ''}
          />
          <Form.Control.Feedback type="invalid">
            {communeErrorMessage}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>


      {/* 5. Checkbox: Đồng ý điều khoản */}
      <Form.Group className="mb-3" controlId="formAgreeTerms">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với các điều khoản và điều kiện."
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
          isInvalid={!isAgreeTermsValid && agreeTerms === false}
        />
        <Form.Control.Feedback type="invalid">
          {agreeTermsErrorMessage}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Nút Submit */}
      <Button variant="primary" type="submit" disabled={!isFormFullyValid}>
        Gửi Thông Tin
      </Button>
    </Form>
  );
}

export default AdvancedFormValidation;