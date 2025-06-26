import React from 'react';
import PropTypes from 'prop-types';

function DataValidator({ userData }) {
  // Component này không hiển thị gì trên UI ngoài mục đích minh họa
  // Console log sẽ hiển thị cảnh báo nếu props không hợp lệ
  console.log("DataValidator received data:", userData);

  return (
    <div style={{ display: 'none' }}>
      {/* Component này chỉ dùng để minh họa PropTypes validation ở console */}
    </div>
  );
}

// Định nghĩa PropTypes cho prop 'userData'
DataValidator.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired, // Tên là string và bắt buộc
    age: PropTypes.number.isRequired,  // Tuổi là number và bắt buộc
    email: PropTypes.string.isRequired, // Email là string và bắt buộc
    phone: PropTypes.string,           // Phone là string (không bắt buộc với PropTypes, vì không có isRequired)
    gender: PropTypes.oneOf(['Nam', 'Nữ', 'Khác']).isRequired, // Giới tính phải là một trong các giá trị này
    agreedToTerms: PropTypes.bool.isRequired, // Đồng ý điều khoản là boolean và bắt buộc
  }).isRequired, // Đối tượng userData là bắt buộc
};

export default DataValidator;