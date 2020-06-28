import React from "react";
import "./panel.component.css";

const Panel = ({ data }) => {
  console.log("data", data);
  // console.log(dataProp);
  // let data = [
  //   { id: 100, label: "Approved", count: 25, color: "green" },
  //   { id: 101, label: "Pending", count: 26, color: "orange" },
  //   { id: 102, label: "Rejected", count: 26, color: "red" },
  // ];

  const getClass = (i) => {
    let currClassName = "panel";

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
