import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3020/products");
        const limitedProducts = response.data.slice(49, 50); // Limit to the first 10 products
        setProducts(limitedProducts);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <p>
              <b>{product.id}</b>
            </p>
            <p>{product.title}</p>
            <img src={product.image.src} alt="" />
            <p>{product.body_html}</p>
            <br />
            {/* Render other product details as needed */}
          </div>
        ))}
    </div>
  );
};

export default Product;
