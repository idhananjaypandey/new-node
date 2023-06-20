import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";
import Product from "./Components/Product";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Product />
      <h1>React</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Show Data
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      {/* <Card /> */}
      {/* <button>Click Me!</button> */}
      {/* <ProductPage /> */}
    </div>
  );
}

export default App;
