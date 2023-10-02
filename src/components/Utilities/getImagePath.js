function getImagePath(brandName) {
  try {
    return require(`../../assets/image/brands/${brandName}.png`);
  } catch (err) {
    // Trả về đường dẫn đến ảnh dự phòng nếu không tìm thấy ảnh của brand.
    return require('../../assets/image/brands/default.png');
  }
}

// Trong component của bạn:
<img
  src={getImagePath(brand.name)}
  className="card-img-top"
  alt={brand.name}
/>