import React from "react";
import "./panel.component.css";

const Panel = ({ data }) => {
  const getClass = (i) => {
    let currClassName = "panel";
    // Only inner panels get up, right, left border
    if (i !== 0 && i !== data.length - 1) {
      currClassName += " inner-item";
    }
    return currClassName;
  };

  return (
    <div className="panel-container">
      {data
        ? data.map(({ label, count, id, color }, i) => (
            <div className={getClass(i)} key={id}>
              <div className="panel-label">{label}</div>
              <div className="panel-label" style={{ color }}>
                {count}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Panel;
