// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard'; // Import ProductCard
import productsData from '../data/products'; // Import dữ liệu sản phẩm

function ProductList() {
  return (
    <div style={styles.container}>
      <h2>Available Products</h2>
      <div style={styles.productList}>
        {productsData.map(product => (
          // Render mỗi sản phẩm bằng ProductCard
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px', // Khoảng cách giữa các sản phẩm
    justifyContent: 'center',
  },
};

export default ProductList;
