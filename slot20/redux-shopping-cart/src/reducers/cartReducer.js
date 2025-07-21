// src/reducers/cartReducer.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart', // Tên của slice, dùng làm prefix cho action types
  initialState: [], // Trạng thái ban đầu của giỏ hàng là một mảng rỗng

  reducers: {
    // Reducer cho hành động thêm sản phẩm vào giỏ hàng
    addToCart: (state, action) => {
      const { id, name, price } = action.payload; // Lấy thông tin sản phẩm từ payload
      const existingItem = state.find(item => item.id === id); // Tìm xem sản phẩm đã có trong giỏ chưa

      if (existingItem) {
        // Nếu sản phẩm đã có, tăng số lượng lên 1
        existingItem.quantity += 1;
      } else {
        // Nếu sản phẩm chưa có, thêm mới vào giỏ với số lượng là 1
        state.push({ id, name, price, quantity: 1 });
      }
      // Giải thích: Với Redux Toolkit và Immer, bạn có thể "mutate" trực tiếp `state` ở đây.
      // Immer sẽ tự động tạo một bản sao bất biến của state mới.
    },

    // Reducer cho hành động cập nhật số lượng sản phẩm trong giỏ hàng
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload; // Lấy id sản phẩm và số lượng mới
      const itemToUpdate = state.find(item => item.id === id); // Tìm sản phẩm cần cập nhật

      if (itemToUpdate) {
        // Cập nhật số lượng
        itemToUpdate.quantity = quantity;
        // Nếu số lượng <= 0, xóa sản phẩm khỏi giỏ hàng
        if (itemToUpdate.quantity <= 0) {
          return state.filter(item => item.id !== id);
        }
      }
      // Giải thích: Tương tự, Immer xử lý tính bất biến.
      // Nếu cần xóa, chúng ta trả về một mảng mới đã được lọc.
    },

    // Reducer cho hành động xóa sản phẩm khỏi giỏ hàng
    removeFromCart: (state, action) => {
      const idToRemove = action.payload; // Lấy id của sản phẩm cần xóa
      // Trả về một mảng mới không chứa sản phẩm có id cần xóa
      return state.filter(item => item.id !== idToRemove);
      // Giải thích: Filter luôn trả về một mảng mới, đảm bảo tính bất biến.
    },
  },
});

// Export các action creators được tạo tự động từ slice
export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;

// Về `name: 'cart'` và `cartSlice.actions`:
// Khi bạn định nghĩa `name: 'cart'` và một reducer `addToCart`,
// Redux Toolkit sẽ tự động tạo một action type là `'cart/addToCart'`
// và một action creator `addToCart()` mà bạn có thể `dispatch` sau này.