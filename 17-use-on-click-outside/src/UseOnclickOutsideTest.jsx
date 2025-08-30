import { useRef, useState } from "react";
import useOutsideClick from "./hooks/useOutsideClick";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {showContent ? (
        <div
          style={{
            backgroundColor: "#f5e0d9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            height: "50vh",
          }}
          ref={ref}
        >
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button
          style={{
            marginTop: "25px",
            padding: "10px 20px",
            textAlign: "center",
            fontSize: "24px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "rgb(85, 58, 45)",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setShowContent(true)}
        >
          Show Content
        </button>
      )}
    </div>
  );
}
