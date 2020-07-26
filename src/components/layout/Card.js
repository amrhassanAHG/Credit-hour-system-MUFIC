import React from "react";

const Card = ({ header, children }) => (
  <div className="card">
    <div className="card-header bg-primary text-white">{header}</div>
    <div
      className="card-body"
      style={{
        minHeight: "200px",
        maxHeight: "200px",
        overflowX: "auto",
        overflowY: "auto",
      }}
    >
      {children}
    </div>
  </div>
);

export default Card;
