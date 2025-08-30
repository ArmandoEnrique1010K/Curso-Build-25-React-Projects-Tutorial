import { useState } from "react";
import { survey } from "./data/survey";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  console.log(selected, multiple);

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection === false
          ? "Enable Multi Selection"
          : "Disable Multi Selection"}
      </button>

      <div className="accordian">
        {survey && survey.length > 0 ? (
          survey.map((surveyItem) => (
            <div className="item" key={surveyItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(surveyItem.id)
                    : () => handleSingleSelection(surveyItem.id)
                }
                className="title"
              >
                <h3>{surveyItem.question}</h3>
                <span>+</span>
              </div>

              {enableMultiSelection
                ? multiple.indexOf(surveyItem.id) !== -1 && (
                    <div className="acc-content ">{surveyItem.answer}</div>
                  )
                : selected === surveyItem.id && (
                    <div className="acc-content ">{surveyItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div> No data found !</div>
        )}
      </div>
    </div>
  );
}
