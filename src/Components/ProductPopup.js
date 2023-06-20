import React from "react";

const ProductPopup = ({ product, onClose }) => {
  return (
    <div className="popup-bar">
      <h2>Edit Product</h2>
      <p>Product Name: {product.name}</p>
      <p>Price: {product.price}</p>
      {/* Add other product details as needed */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProductPopup;
