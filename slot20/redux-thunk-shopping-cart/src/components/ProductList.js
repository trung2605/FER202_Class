// src/components/ProductList.js

import React from 'react';
import { useSelector } from 'react-redux'; // Hook để truy cập state từ Redux store
import ProductItem from './ProductItem'; // Import component ProductItem

// Component để hiển thị danh sách các sản phẩm
const ProductList = () => {
  // Sử dụng useSelector để lấy danh sách sản phẩm từ Redux store
  // `state.products.products` truy cập đến slice `products` trong rootReducer, và lấy mảng `products`
  const products = useSelector((state) => state.products.products);

  return (
    <div className="container">
      <h2 className="mb-4 text-center">Danh sách Sản phẩm</h2>
      <div className="row">
        {products.map((product) => (
          // Render ProductItem cho mỗi sản phẩm trong danh sách
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;