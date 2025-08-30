import React from "react";

export default function ScrollToSection() {
  const data = [
    {
      id: 1,
      label: "First Card",
      style: {
        background: "red",
      },
    },
    {
      id: 2,
      label: "Second Card",
      style: {
        background: "grey",
      },
    },
    {
      id: 3,
      label: "Third Card",
      style: {
        background: "blue",
      },
    },
    {
      id: 4,
      label: "Fourth Card",
      style: {
        background: "green",
      },
    },
    {
      id: 5,
      label: "Fifth Card",
      style: {
        background: "orange",
      },
    },
  ];

  const refs = data.reduce((acc, dataItem) => {
    acc[dataItem.id] = React.createRef();
    return acc;
  }, {});

  function handleScrollToSection(section) {
    window.scrollTo({
      top: refs[section].current.getBoundingClientRect().top,
      behavior: "smooth",
    });
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Scroll to a particular section</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {data.map((dataItem) => (
          <button
            key={dataItem.id}
            style={{
              margin: "1rem",
              padding: "1rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              background: "black",
              color: "white",
            }}
            onClick={() => handleScrollToSection(dataItem.id)}
            data-section={dataItem.id}
          >
            Click To Scroll Section {dataItem.id}
          </button>
        ))}
      </div>

      {data.map((dataItem) => (
        <div
          key={dataItem.id}
          ref={refs[dataItem.id]}
          style={{
            width: "100%",
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "36px",
            fontFamily: "Arial, sans-serif",
            ...dataItem.style,
          }}
        >
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </>
  );
}
