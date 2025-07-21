// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../reducers/cartReducer';

function Cart() {
  // Lấy toàn bộ mảng giỏ hàng từ Redux store
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Tính tổng số tiền của giỏ hàng
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={styles.cartList}>
            {cartItems.map(item => (
              <li key={item.id} style={styles.cartItem}>
                <div style={styles.itemDetails}>
                  <strong>{item.name}</strong> - ${item.price.toFixed(2)} x {item.quantity}
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div style={styles.itemActions}>
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                    style={styles.actionButton}
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                    style={styles.actionButton}
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    style={{ ...styles.actionButton, backgroundColor: '#f44336' }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 style={styles.total}>Total Cost: ${totalCost.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    borderTop: '1px solid #eee',
    marginTop: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  cartList: {
    listStyle: 'none',
    padding: 0,
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px dashed #eee',
    padding: '10px 0',
  },
  itemDetails: {
    flexGrow: 1,
  },
  itemActions: {
    display: 'flex',
    gap: '5px',
  },
  actionButton: {
    backgroundColor: '#008CBA',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  total: {
    textAlign: 'right',
    marginTop: '20px',
    fontSize: '1.5em',
    color: '#333',
  },
};

export default Cart;
