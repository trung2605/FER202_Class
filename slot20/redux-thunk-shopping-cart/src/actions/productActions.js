// src/actions/productActions.js

// Action type cho việc thêm sản phẩm thành công
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';

// Action type cho việc thêm sản phẩm vào giỏ hàng
export const ADD_TO_CART = 'ADD_TO_CART';

// Action type cho việc xóa sản phẩm khỏi giỏ hàng
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action type cho việc cập nhật số lượng sản phẩm trong giỏ hàng
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';


// --------------------------------------------------------------------------------
// Action Creators (Synchronous Actions)
// --------------------------------------------------------------------------------

// Action creator cho việc thêm sản phẩm thành công
// Đây là một action creator đồng bộ, trả về một action object thuần túy.
export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product, // Payload chứa dữ liệu của sản phẩm mới
});

// Action creator để thêm một sản phẩm vào giỏ hàng
// Đây là một action creator đồng bộ
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: { product }, // Payload chứa thông tin sản phẩm cần thêm
});

// Action creator để xóa một sản phẩm khỏi giỏ hàng
// Đây là một action creator đồng bộ
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { productId }, // Payload chứa ID của sản phẩm cần xóa
});

// Action creator để cập nhật số lượng sản phẩm trong giỏ hàng
// Đây là một action creator đồng bộ
export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity }, // Payload chứa ID sản phẩm và số lượng mới
});

// --------------------------------------------------------------------------------
// Async Action Creator (using Redux Thunk)
// --------------------------------------------------------------------------------

// Thunk action creator để thêm sản phẩm mới
// Đây là một ví dụ về việc sử dụng Redux Thunk.
// Thay vì trả về một action object, hàm này trả về một function.
// Function này nhận `dispatch` và `getState` làm đối số.
// Điều này cho phép chúng ta thực hiện các tác vụ bất đồng bộ (ví dụ: gọi API)
// trước khi dispatch một action đồng bộ để cập nhật store.
export const addProduct = (product) => {
  // `dispatch` là hàm được cung cấp bởi Redux Thunk để dispatch các action
  // `getState` là hàm để truy cập trạng thái hiện tại của Redux store (ít dùng trong trường hợp này)
  return (dispatch) => {
    // --- Mô phỏng cuộc gọi API bất đồng bộ ---
    // Trong một ứng dụng thực tế, đây sẽ là nơi bạn gọi fetch() hoặc axios.post()
    // Ví dụ: `axios.post('/api/products', product)`
    console.log('Mô phỏng: Đang gửi yêu cầu thêm sản phẩm...', product);

    // Giả lập độ trễ của API call (ví dụ 1 giây)
    setTimeout(() => {
      // Sau khi "API call" hoàn tất, dispatch action thành công
      dispatch(addProductSuccess({ ...product, id: `prod${Date.now()}` })); // Gán ID tạm thời
      console.log('Mô phỏng: Sản phẩm đã được thêm thành công.');
    }, 1000); // Giả lập độ trễ 1 giây
  };
};