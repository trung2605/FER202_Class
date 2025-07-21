	-- Create database
	CREATE DATABASE IF NOT EXISTS bakery;

	USE bakery;
	-- Create table Users
	CREATE TABLE users (
		user_id CHAR(7) PRIMARY KEY CHECK (user_id LIKE 'CUS____'),
		first_name VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
		last_name VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
		email VARCHAR(100) UNIQUE NOT NULL,
		phone VARCHAR(20) UNIQUE,
		password_hash VARCHAR(255) NOT NULL,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		role TINYINT DEFAULT 0
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

	-- Create table Products
	CREATE TABLE products (
		product_id CHAR(7) PRIMARY KEY CHECK (product_id LIKE 'PRD____'),
		name VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
		description TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
		price DECIMAL(10,0) NOT NULL,
		stock_quantity INT DEFAULT 0 CHECK (stock_quantity >= 0),
		category VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
		image_url VARCHAR(255),
		expiration_date VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

	-- Create table Branches
	CREATE TABLE branches (
		id INT AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
		address VARCHAR(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
		hotline VARCHAR(20),
		map_url VARCHAR(1000)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

	-- Insert sample data for Users
	INSERT INTO users (user_id, first_name, last_name, email, phone, password_hash, role) VALUES
	('CUS0001', 'Nguyen', 'Van A', 'vana@gmail.com', '0375622471', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 0),
	('CUS0002', 'Tran', 'Thi B', 'thib@gmail.com', '0375622472', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 0),
	('CUS0004', 'Nguyen Minh', 'Tuan', 'tuan@gmail.com', '0375622474', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 1),
	('CUS0005', 'Nguyen', 'Tuan2', 'tuan2@gmail.com', '0375622475', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 0);

	-- Insert sample data for Products
	INSERT INTO products (product_id, name, description, price, stock_quantity, image_url, category, expiration_date)
	VALUES
	('PRD0001', 'Bánh Chiffon Trà Xanh', 'Bánh Chiffon mềm mịn với hương vị trà xanh thơm ngon.', 36000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-26-bb4406d9.jpg?v=1692093366447', 'Bánh Ngọt', '7 Ngày'),
	('PRD0002', 'Bánh Chiffon 3 Vị', 'Bánh Chiffon kết hợp 3 hương vị độc đáo.', 22000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-29-546f7bfe.jpg?v=1692093302560', 'Bánh Ngọt', '7 Ngày'),
	('PRD0003', 'Bánh Mì Nhân Sen Sữa Dừa', 'Bánh mì tươi với nhân sen và sữa dừa béo ngậy.', 10000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/sen-sua-dua-ac9cc58a8ba545aaa03c.jpg?v=1692092922617', 'Bánh Mì', '3 Ngày'),
	('PRD0004', 'Bánh Mì Hạt Óc Chó Sốt Kem', 'Bánh mì giòn rụm với hạt óc chó và sốt kem béo.', 30000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-22-a231cf82.jpg?v=1692092861340', 'Bánh Mì', '3 Ngày'),
	('PRD0005', 'Bánh Donut Socola Dâu 45G', 'Bánh donut phủ socola và dâu ngọt ngào.', 15000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/20-f815cca7a6314f428132e9c6b0472.jpg?v=1692092825777', 'Bánh Ngọt', '3 Ngày'),
	('PRD0006', 'Bánh Donut Socola Trắng Hạnh Nhân 45G', 'Bánh donut socola trắng với hạnh nhân giòn tan.', 20000, 50, 'https://product.hstatic.net/200000411281/product/khong_co_tieu_de__728___90_px___600___600_px___1__41c78a732f54428580f34db8e2d26f94_master.png', 'Bánh Ngọt', '3 Ngày'),
	('PRD0007', 'Bánh Donut Socola Trà Xanh 45G', 'Bánh donut socola trà xanh thơm lừng.', 15000, 50, 'https://www.binrecipes.com/wp-content/uploads/2025/03/close-up-matcha-mochi-doughnut-glazed-768x538.webp', 'Bánh Ngọt', '3 Ngày'),
	('PRD0008', 'Bánh Mì Xúc Xích Ruốc', 'Bánh mì mềm với xúc xích và ruốc đậm đà.', 15000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-18-5dc8fb8e.jpg?v=1692092726203', 'Bánh Mì', '3 Ngày'),
	('PRD0009', 'Bánh Mì Nhân Sợi Gà Sốt Teriyaki', 'Bánh mì tươi với gà sốt teriyaki đậm vị.', 15000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/banh-tuoi-soi-ga-sot-teriyaki-1.jpg?v=16920926953670a975e6-min.png?v=1692091986087', 'Bánh Mì', '3 Ngày'),
	('PRD0010', 'Bánh Mousse Chocolate', 'Bánh mousse socola mềm mịn, tan chảy.', 390000, 10, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-chua-co-ten-a480f34a8c8.jpg?v=1692091849157', 'Bánh Kem', '7 Ngày'),
	('PRD0011', 'Bánh Kem Sweet Heart 4', 'Bánh kem hình trái tim ngọt ngào cho các dịp đặc biệt.', 150000, 10, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-removebg-preview-1-ba51f7d4e.png?v=1692091666957', 'Bánh Kem', '7 Ngày'),
	('PRD0012', 'Bánh Kem Amazing Chocolate', 'Bánh kem socola tuyệt hảo cho tín đồ ngọt.', 380000, 10, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/banh-kem-amazing-chocolate-1-c.png?v=1692091472963', 'Bánh Kem', '7 Ngày'),
	('PRD0013', 'Bánh Kem Endless Love', 'Bánh kem tình yêu vĩnh cửu, ngọt ngào.', 380000, 10, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/endless-love-c7027cf9711b4fde9b6.png?v=1692091413697', 'Bánh Kem', '7 Ngày'),
	('PRD0014', 'Bánh Kem Princess', 'Bánh kem công chúa xinh đẹp và tinh tế.', 380000, 10, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/princess-8-58d2fc00a1d24627a63e3.png?v=1692091370170', 'Bánh Kem', '7 Ngày'),
	('PRD0015', 'Bánh Sừng Bò Mini', 'Bánh sừng bò mini giòn tan, thơm bơ.', 36000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/26-52b2528f0cb542bbbcb7810df8e62.jpg?v=1692095091097', 'Bánh Ngọt', '3 Ngày'),
	('PRD0016', 'Bánh Mì Nướng Phô Mai Que', 'Bánh mì nướng với phô mai que béo ngậy.', 15000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/3-fdd1265100174cc3a112fde516b520.jpg?v=1692095046793', 'Bánh Mì', '3 Ngày'),
	('PRD0017', 'Bánh Mì Nướng Caramen', 'Bánh mì nướng với lớp caramen ngọt ngào.', 15000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-862efa1275f7462c9e2680575e45da.jpg?v=1692094997170', 'Bánh Mì', '3 Ngày'),
	('PRD0018', 'Bánh Mì Nướng Bơ Tỏi', 'Bánh mì nướng thơm lừng bơ tỏi.', 15000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/9-1cc15e71b97d405bbef69f4c166c44.jpg?v=1692094932597', 'Bánh Mì', '3 Ngày'),
	('PRD0019', 'Bánh Quy Dừa', 'Bánh quy giòn tan với hương dừa thơm ngon.', 42000, 20, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/quy-dua-to-nho-9719c816ba7247699.jpg?v=1692094860540', 'Bánh Khô', '30 Ngày'),
	('PRD0020', 'Bánh Quy Hạnh Nhân', 'Bánh quy thơm lừng với hạnh nhân béo bùi.', 42000, 20, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/quy-hanh-nhan-d1ba3f7c70fb43d0b1.jpg?v=1692094804490', 'Bánh Khô', '30 Ngày'),
	('PRD0021', 'Bánh Quy Bơ Mứt Dâu', 'Bánh quy bơ thơm kết hợp mứt dâu ngọt.', 42000, 20, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/quy-mut-dau-to-a0e6bb6421aa47bda.jpg?v=1692094744600', 'Bánh Khô', '30 Ngày'),
	('PRD0022', 'Bánh Lady Finger', 'Bánh Lady Finger nhẹ nhàng, mềm mịn.', 42000, 20, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/lady-finger-6bd9609cce084948a182.jpg?v=1692094694990', 'Bánh Khô', '30 Ngày'),
	('PRD0023', 'Bánh Pana Cotta', 'Bánh Pana Cotta mềm mịn, ngọt nhẹ.', 22000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/panna-cotta-3459143e9ffa4e01bcfe.jpg?v=1692094440360', 'Bánh Tráng Miệng', '7 Ngày'),
	('PRD0024', 'Sữa Chua', 'Sữa chua mịn màng, chua ngọt tự nhiên.', 13000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/sua-chua-59d14133b74f49979da0edf.jpg?v=1692094394980', 'Bánh Tráng Miệng', '7 Ngày'),
	('PRD0025', 'Caramen', 'Caramen ngọt ngào, tan chảy trong miệng.', 13000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/caramel-d7c7ad0a5a654cac8f76208d.jpg?v=1692094359980', 'Bánh Tráng Miệng', '7 Ngày'),
	('PRD0026', 'Mousse Trà Xanh', 'Bánh mousse trà xanh thơm mát, mềm mịn.', 31000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-31-6c5684fa.jpg?v=1692094319223', 'Bánh Tráng Miệng', '7 Ngày'),
	('PRD0027', 'Mousse Chanh Leo', 'Bánh mousse chanh leo chua ngọt hài hòa.', 31000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/54-472bcbe688e046dea6add446c0fe1.jpg?v=1692094268307', 'Bánh Tráng Miệng', '7 Ngày'),
	('PRD0028', 'Bánh Red Velvet 90G', 'Bánh Red Velvet đỏ mịn với lớp kem béo.', 58000, 10, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-5-0619631ba.jpg?v=1692094227680', 'Bánh Ngọt', '7 Ngày'),
	('PRD0029', 'Bánh Tiramisu 90G', 'Bánh Tiramisu thơm cà phê và kem mascarpone.', 36000, 10, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/28-bd8429ed0aa94f4cb872f92dfa4b9.jpg?v=1692094191763', 'Bánh Tráng Miệng', '7 Ngày'),
	('PRD0030', 'Bánh Opera 90G', 'Bánh Opera tầng lớp socola và cà phê tinh tế.', 36000, 10, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/27-5c9d407149054a0caab958d17fc7a.jpg?v=1692094146947', 'Bánh Ngọt', '7 Ngày'),
	('PRD0031', 'Bánh Su Kem Nhân Vani', 'Bánh su kem mềm với nhân vani ngọt ngào.', 29000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/49-2f4173248ab5495babe1c9ddc804c.jpg?v=1692093856747', 'Bánh Ngọt', '3 Ngày'),
	('PRD0032', 'Bánh Su Kem Nhân Socola', 'Bánh su kem thơm ngon với nhân socola đậm đà.', 30000, 50, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/48-ba0acd283d9944f5bfa21d4026b29.jpg?v=1692093815550', 'Bánh Ngọt', '3 Ngày'),
	('PRD0033', 'Bánh Muffin Socola Chip', 'Bánh muffin mềm với socola chip tan chảy.', 19000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/17-0bab5559a3714b46b407517296419.jpg?v=1692093767223', 'Bánh Ngọt', '7 Ngày'),
	('PRD0034', 'Bánh Gato Socola Sữa', 'Bánh gato socola sữa mềm mịn, ngọt ngào.', 40000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-2-8c5a3322f.jpg?v=1692093730967', 'Bánh Ngọt', '7 Ngày'),
	('PRD0035', 'Bánh Cuộn Socola Miếng', 'Bánh cuộn socola miếng nhỏ gọn, thơm ngon.', 23000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/83-5760a68327794f8c9675f73336293-min-1.jpg?v=1692093694480', 'Bánh Ngọt', '7 Ngày'),
	('PRD0036', 'Bánh Cuộn Vani 110G', 'Bánh cuộn vani mềm mịn, thơm béo.', 35000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/42-f9db27ab52dc45ddb159636c43e27.jpg?v=1692093486117', 'Bánh Ngọt', '7 Ngày'),
	('PRD0037', 'Bánh Cuộn Trà Xanh 110G', 'Bánh cuộn trà xanh thơm mát, ngọt nhẹ.', 35000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/43-38af50a70488465286ce3ff0040db.jpg?v=1692093451703', 'Bánh Ngọt', '7 Ngày'),
	('PRD0038', 'Bánh Chiffon Vani', 'Bánh Chiffon vani mềm nhẹ, thơm lừng.', 32000, 30, 'https://bizweb.dktcdn.net/thumb/large/100/492/035/products/41-c43fc976b5554ed9a89c65d6f22db.jpg?v=1692093413140', 'Bánh Ngọt', '7 Ngày');

	-- Insert sample data for Branches
	INSERT INTO branches (name, address, hotline, map_url) VALUES
	('Cơ sở Ngũ Hành Sơn', '479 Mai Đăng Chơn, Hòa Quý, Ngũ Hành Sơn, Đà Nẵng.', '19001900', 
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30680.628041553206!2d108.22264276888052!3d16.009428295255674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314211001704cd0b%3A0x934aec1889fc089a!2zQW5oIFF1w6JuIEJha2VyeSAtIDU2NiBMw6ogVsSDbiBIaeG6v24!5e0!3m2!1svi!2s!4v1742734081760!5m2!1svi!2s'),
	('Cơ sở Thanh Khê', '39 Lý Thái Tông, Thanh Khê Tây, Thanh Khê, Đà Nẵng.', '19001900', 
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30670.558674384425!2d108.13967764377593!3d16.074836384372976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421978d7d8c92d%3A0xc4fe23e8647ee642!2sAnh%20Qu%C3%A2n%20Bakery!5e0!3m2!1svi!2s!4v1742734182424!5m2!1svi!2s'),
	('Cơ sở Liên Chiểu', '359 Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng.', '19001900', 
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61340.236285054554!2d108.0569593287342!3d16.0776920531889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421fcc05edba31%3A0xc874dd685b2050c8!2sAnh%20Qu%C3%A2n%20Bakery!5e0!3m2!1svi!2s!4v1742734222533!5m2!1svi!2s'),
	('Cơ sở Cẩm Lệ', '33 Trường Sơn, Hòa Thọ Tây, Cẩm Lệ, Đà Nẵng.', '19001900', 
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30675.554686245534!2d108.1631558689842!3d16.042415999303135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421916153e5631%3A0x3fd489e0f2825d6f!2sAnh%20Qu%C3%A2n%20Bakery!5e0!3m2!1svi!2s!4v1742734261627!5m2!1svi!2s'),
	('Cơ sở Sơn Trà', '170 Phạm Cự Lượng, An Hải Bắc, Sơn Trà, Đà Nẵng.', '19001900', 
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15334.486773290053!2d108.22468757629397!3d16.08510938394776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217909fb49021%3A0xc0fc6f6036ae4f54!2sAnh%20Qu%C3%A2n%20Bakery!5e0!3m2!1svi!2s!4v1742734341494!5m2!1svi!2s'),
	('Cơ sở Hòa Vang', 'Đường ĐT 602, Hòa Sơn, Hòa Vang, Đà Nẵng.', '19001900', 
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61340.236285054554!2d108.0569593287342!3d16.0776920531889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421fd674cafc63%3A0x7e9a593892edeaab!2zQW5oIFF1w6JuIEJha2VyeSAtIE5nw6MgQmEgSG_DoCBTxqFu!5e0!3m2!1svi!2s!4v1742734237715!5m2!1svi!2s');


CREATE TABLE carts (
    cart_id CHAR(7) PRIMARY KEY, -- Phù hợp với định dạng ID 'CUS____'/'PRD____'
    user_id CHAR(7),             -- Có thể NULL nếu là giỏ hàng của khách (guest cart)
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_modified_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_cart_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng CART_ITEMS đã điều chỉnh
CREATE TABLE cart_items (
    cart_item_id CHAR(7) PRIMARY KEY, -- Phù hợp với định dạng ID 'CUS____'/'PRD____'
    cart_id CHAR(7) NOT NULL,
    product_id CHAR(7) NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    price_at_addition DECIMAL(10,0) NOT NULL, -- Đổi thành DECIMAL(10,0) để khớp với Products.price
    CONSTRAINT fk_cart_item_cart FOREIGN KEY (cart_id) REFERENCES carts(cart_id) ON DELETE CASCADE,
    CONSTRAINT fk_cart_item_product FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE,
    CONSTRAINT uc_cart_product UNIQUE (cart_id, product_id) -- Đảm bảo một sản phẩm chỉ có một dòng trong cùng một giỏ
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


ALTER TABLE carts
ADD COLUMN created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN last_modified_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;