import axios from 'axios';

const API_URL = 'http://localhost:3001'; // URL của JSON Server

export const loginUser = async (username, password) => {
  try {
    // Giả lập tìm kiếm người dùng. Trong thực tế, bạn sẽ gửi POST request đến endpoint login.
    const response = await axios.get(`${API_URL}/users?username=${username}&password=${password}`);

    if (response.data.length > 0) {
      // Tìm thấy người dùng
      return { success: true, user: response.data[0] };
    } else {
      // Không tìm thấy người dùng hoặc sai mật khẩu
      return { success: false, message: 'Tên đăng nhập hoặc mật khẩu không đúng.' };
    }
  } catch (error) {
    console.error('Lỗi khi đăng nhập:', error);
    return { success: false, message: 'Đã xảy ra lỗi trong quá trình đăng nhập.' };
  }
};