import React, { useState } from 'react';

function ProductList2() {
  // State quản lý danh sách sản phẩm (không thay đổi so với bản checkbox)
  const [products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  // State quản lý sản phẩm được chọn.
  // Với radio button, chúng ta chỉ cần lưu trữ ID của MỘT sản phẩm được chọn.
  // Khởi tạo là null hoặc một giá trị mặc định nếu bạn muốn có sản phẩm được chọn sẵn.
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Hàm xử lý khi radio button thay đổi
  const handleRadioChange = (event) => {
    // Lấy ID của sản phẩm từ giá trị của radio button
    const productId = parseInt(event.target.value, 10);
    // Cập nhật state với ID của sản phẩm được chọn.
    // Radio button chỉ có một giá trị, nên không cần kiểm tra event.target.checked
    // như checkbox (vì radio button chỉ kích hoạt khi nó được "chọn", không phải "bỏ chọn")
    setSelectedProductId(productId);
  };

  // Tìm sản phẩm được chọn dựa trên selectedProductId
  const selectedProduct = products.find(p => p.id === selectedProductId);

  return (
    <div>
      <h2>Chọn một sản phẩm (Radio Buttons)</h2>
      {products.map(product => (
        <div key={product.id}>
          <input
            type="radio" // Thay đổi từ "checkbox" sang "radio"
            name="productSelection" // RẤT QUAN TRỌNG: Tất cả radio button trong cùng một nhóm phải có cùng thuộc tính 'name'
            id={`product-${product.id}`} // Đảm bảo ID là duy nhất, ví dụ: product-1, product-2
            value={product.id} // Giá trị của input khi được chọn
            // Kiểm tra xem ID của sản phẩm hiện tại có trùng với ID trong state không
            checked={selectedProductId === product.id}
            onChange={handleRadioChange} // Hàm xử lý khi có thay đổi
          />
          <label htmlFor={`product-${product.id}`}>{product.name}</label>
        </div>
      ))}

      {/* Hiển thị sản phẩm đã chọn */}
      {selectedProduct && ( // Chỉ hiển thị nếu có sản phẩm được chọn
        <p>Bạn đã chọn sản phẩm: <strong>{selectedProduct.name}</strong></p>
      )}

      {/* Nếu bạn muốn hiển thị thông báo khi chưa chọn gì */}
      {!selectedProduct && (
        <p>Vui lòng chọn một sản phẩm.</p>
      )}
    </div>
  );
}

export default ProductList2;