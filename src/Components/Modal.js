import React, { useState, useEffect } from "react";
import "./Modal.css";
import axios from "axios";

function Modal({ setOpenModal }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3020/products");
      const limitedProducts = response.data.slice(49, 50); // Limit to the first 10 products
      setProducts(limitedProducts);
      //console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {products &&
          products.map((product) => (
            <>
              <div key={product.id} className="title">
                <img src={product.image.src} alt="" />
                <h1>{product.title}</h1>
              </div>
              <div className="body">
                <p>{product.body_html}</p>
              </div>
            </>
          ))}
        {/* <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;
