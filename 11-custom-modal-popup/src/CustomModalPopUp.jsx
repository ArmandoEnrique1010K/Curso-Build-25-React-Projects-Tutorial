import { useState } from "react";
import Modal from "./components/Modal";

export default function CustomModalPopUp() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div className="container">
      <button
        onClick={handleToggleModalPopup}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#5cb85c",
          color: "white",
        }}
      >
        Open Modal Popup
      </button>

      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<p>Customized Header</p>}
          footer={<p>Customized Footer</p>}
          onClose={onClose}
          body={<p>Customized body</p>}
        />
      )}
    </div>
  );
}
