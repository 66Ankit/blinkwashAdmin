import React from "react";
import "./ErrorTooltip.css";

const ErrorTooltip = ({ message, onClose }) => {
  return (
    <div className="tooltip">
      <span className="tooltip-text">{message}</span>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default ErrorTooltip;
