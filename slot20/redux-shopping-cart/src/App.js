// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div style={appStyles.container}>
      <h1 style={appStyles.header}>Redux Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

const appStyles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
};

export default App;