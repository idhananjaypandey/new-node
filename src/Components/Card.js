import React, { useState } from "react";

const Card = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="card">
      <h2>Card Title</h2>
      <p>Card Description</p>
      <button onClick={handleButtonClick}>Open Popup</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Popup Content</h3>
            <p>This is the content of the popup.</p>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
