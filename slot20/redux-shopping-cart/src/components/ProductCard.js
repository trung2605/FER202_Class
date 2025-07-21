// src/components/ProductCard.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from '../reducers/cartReducer';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  // Lấy ra sản phẩm này trong giỏ hàng (nếu có) để biết số lượng hiện tại
  const cartItem = useSelector(state => state.cart.find(item => item.id === product.id));
  const [quantityInput, setQuantityInput] = useState(cartItem ? cartItem.quantity : 1);

  // Xử lý khi nhấn nút "Add to Cart"
  const handleAddToCart = () => {
    // Dispatch action `addToCart` với payload là thông tin sản phẩm
    dispatch(addToCart(product));
    setQuantityInput(cartItem ? cartItem.quantity + 1 : 1); // Cập nhật input nếu sản phẩm đã có
  };

  // Xử lý khi nhấn nút "Update Cart"
  const handleUpdateCart = () => {
    // Đảm bảo số lượng là một số dương hợp lệ
    const newQuantity = parseInt(quantityInput, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
    } else {
      alert('Số lượng không hợp lệ. Vui lòng nhập số dương.');
      setQuantityInput(cartItem ? cartItem.quantity : 0); // Reset input về số lượng cũ
    }
  };

  // Xử lý khi nhấn nút "Remove from Cart"
  const handleRemoveFromCart = () => {
    // Dispatch action `removeFromCart` với payload là id sản phẩm
    dispatch(removeFromCart(product.id));
    setQuantityInput(0); // Reset input về 0 sau khi xóa
  };

  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>ID: {product.id}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Description: {product.description}</p>
      <p>Catalogs: {product.catalogs.join(', ')}</p>

      {/* Hiển thị số lượng hiện tại trong giỏ nếu có */}
      {cartItem && (
        <p style={{ fontWeight: 'bold', color: 'blue' }}>
          In Cart: {cartItem.quantity}
        </p>
      )}

      <div style={styles.actions}>
        {/* Nút Add to Cart */}
        <button style={styles.button} onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* Phần Update/Delete chỉ hiện khi sản phẩm đã có trong giỏ */}
        {cartItem && (
          <>
            <input
              type="number"
              min="0"
              value={quantityInput}
              onChange={(e) => setQuantityInput(parseInt(e.target.value, 10))}
              style={styles.quantityInput}
            />
            <button style={styles.updateButton} onClick={handleUpdateCart}>
              Update Cart
            </button>
            <button style={styles.deleteButton} onClick={handleRemoveFromCart}>
              Delete from Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  actions: {
    marginTop: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  updateButton: {
    backgroundColor: '#008CBA',
    color: 'white',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  quantityInput: {
    width: '60px',
    padding: '7px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    textAlign: 'center',
  },
};

export default ProductCard;
