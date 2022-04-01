import React, { useState } from "react";
import "./drop.css"
const Drop = ({ options, selected, setselected, items }) => {
  const [open, setopen] = useState(false)
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value){
      return null;
      }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => setselected(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <div onClick={() => setopen(!open)} className={`ui search dropdown ${open ? 'visible active' : ''}`}>
          <div className="text">{selected.label}<i className="dropdown icon"></i></div>
          
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
}
export default Drop;
