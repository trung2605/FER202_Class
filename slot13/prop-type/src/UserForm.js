import React, { useState } from 'react';
import './UserForm.css';
import DataValidator from './DataValidator'; // Import component DataValidator

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    gender: 'Nam',
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const [submittedData, setSubmittedData] = useState(null); // State để lưu dữ liệu đã submit cho DataValidator

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
    if (generalError) {
        setGeneralError('');
    }
    setSubmittedData(null); // Reset submittedData khi người dùng thay đổi form
  };

  // Logic validate dữ liệu vẫn cần ở đây để hiển thị lỗi trên UI
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Tên: không được để trống, chứa 3-50 ký tự
    if (!formData.name.trim()) {
      newErrors.name = 'Tên không được để trống!';
      isValid = false;
    } else if (formData.name.trim().length < 3 || formData.name.trim().length > 50) {
      newErrors.name = 'Tên phải có từ 3 đến 50 ký tự!';
      isValid = false;
    }

    // Tuổi: không được để trống, từ 18-100 tuổi
    const ageNum = parseInt(formData.age);
    if (!formData.age.trim()) {
      newErrors.age = 'Tuổi không được để trống!';
      isValid = false;
    } else if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      newErrors.age = 'Tuổi phải nằm trong khoảng từ 18 đến 100!';
      isValid = false;
    }

    // Email: không được để trống, đúng định dạng
    if (!formData.email.trim()) {
      newErrors.email = 'Email không được để trống!';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không đúng định dạng!';
      isValid = false;
    }

    // Số điện thoại: từ 10-15 chữ số (optional validation, PropTypes doesn't check length)
    if (!formData.phone.trim()) {
        newErrors.phone = 'Số điện thoại không được để trống!';
        isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại phải có từ 10-15 chữ số!';
      isValid = false;
    }

    // Phải đồng ý với điều khoản
    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'Phải đồng ý với điều khoản để tiếp tục!';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setGeneralError('');

    if (validateForm()) {
      console.log('Dữ liệu hợp lệ theo UI validation, sẵn sàng gửi đi:', formData);
      alert('Đăng ký thành công!\n(Kiểm tra console cho PropTypes validation)');

      // Gửi dữ liệu hợp lệ (từ UI validation) đến DataValidator để PropTypes kiểm tra
      // Lưu ý: PropTypes chỉ kiểm tra kiểu và tính bắt buộc, không phải logic nghiệp vụ
      setSubmittedData({
        ...formData,
        age: parseInt(formData.age) // Chuyển age sang number để khớp với PropTypes.number
      });

    } else {
      setGeneralError('Vui lòng kiểm tra các trường hợp lỗi.');
      console.log('Dữ liệu không hợp lệ theo UI validation.');
      setSubmittedData(null); // Không truyền dữ liệu nếu UI validation fail
    }
  };

  return (
    <div className="form-container">
      <h2>Ví dụ 4: Tạo Form sử dụng validate dữ liệu</h2>

      {generalError && (
        <div className="error-message-box">
          <p>Lỗi: {generalError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
            aria-describedby="nameError"
          />
          {errors.name && <p id="nameError" className="error-text">⚠️ {errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="age">Tuổi</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={errors.age ? 'input-error' : ''}
            aria-describedby="ageError"
          />
          {errors.age && <p id="ageError" className="error-text">⚠️ {errors.age}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
            aria-describedby="emailError"
          />
          {errors.email && <p id="emailError" className="error-text">⚠️ {errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'input-error' : ''}
            aria-describedby="phoneError"
          />
          {errors.phone && <p id="phoneError" className="error-text">⚠️ {errors.phone}</p>}
        </div>

        <div className="form-group">
          <label>Giới tính</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                checked={formData.gender === 'Nam'}
                onChange={handleChange}
              />{' '}
              Nam
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nữ"
                checked={formData.gender === 'Nữ'}
                onChange={handleChange}
              />{' '}
              Nữ
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Khác"
                checked={formData.gender === 'Khác'}
                onChange={handleChange}
              />{' '}
              Khác
            </label>
          </div>
        </div>

        <div className="form-group checkbox-group">
          <label htmlFor="agreedToTerms">
            <input
              type="checkbox"
              id="agreedToTerms"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              aria-describedby="termsError"
            />{' '}
            Đồng ý với điều khoản
          </label>
          {errors.agreedToTerms && <p id="termsError" className="error-text">⚠️ {errors.agreedToTerms}</p>}
        </div>

        <button type="submit" className="submit-button">Gửi</button>
      </form>

      {/* Conditionally render DataValidator khi có submittedData */}
      {submittedData && <DataValidator userData={submittedData} />}
    </div>
  );
}

export default UserForm;