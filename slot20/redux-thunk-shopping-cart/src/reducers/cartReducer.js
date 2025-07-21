// src/reducers/cartReducer.js

const initialState = {
  cartItems: [], // Mảng chứa các sản phẩm trong giỏ hàng. Mỗi item sẽ có { product, quantity }
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { product } = action.payload; // Lấy thông tin sản phẩm từ action
      const existingItem = state.cartItems.find(item => item.product.id === product.id); // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa

      if (existingItem) {
        // Nếu sản phẩm đã có, tăng số lượng của sản phẩm đó
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 } // Tăng quantity lên 1
              : item
          ),
        };
      } else {
        // Nếu sản phẩm chưa có, thêm sản phẩm mới vào giỏ hàng với số lượng là 1
        return {
          ...state,
          cartItems: [...state.cartItems, { product, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      // Xóa sản phẩm khỏi giỏ hàng dựa trên ID
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.product.id !== action.payload.productId),
      };
    case 'UPDATE_QUANTITY':
      const { productId, quantity } = action.payload; // Lấy ID sản phẩm và số lượng mới
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.product.id === productId
            ? { ...item, quantity: parseInt(quantity) } // Cập nhật số lượng
            : item
        ).filter(item => item.quantity > 0) // Loại bỏ các item có số lượng <= 0
      };
    default:
      return state;
  }
};

export default cartReducer;