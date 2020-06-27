import React from "react";
import "./title.component.css";

const Title = ({ title, subTitle }) => (
  <div className="title-container">
    <div className="title">{title}</div>
    <div className="subtitle">{subTitle}</div>
  </div>
);

export default Title;
