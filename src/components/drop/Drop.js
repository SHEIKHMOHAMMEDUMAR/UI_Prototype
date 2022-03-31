import "./drop.css"
import { React, useState } from "react";

export default function Drop({ selected, setselected }) {
  const [isactive, setisactive] = useState(false);
  const options = [
    "Last 7 days",
    "Last 1 month",
    "Last 3 months",
    "Last 6 months",
    "Last 1 year"
  ];
  return (
    <div className="dropdown">
      <div className="dropbtn" onClick={(e) => setisactive(!isactive)} >
       Last 7 days
        <span className="down"></span>
      </div>
      {isactive && (
        <div className="drop-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setselected(option);
                setisactive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}