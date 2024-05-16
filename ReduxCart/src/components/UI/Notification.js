// Notification.js

import React from "react";
import "./Notification.css";

const Notification = ({ status, title, message }) => {
  let statusClass = "";

  if (status === "error") {
    statusClass = "error";
  } else if (status === "success") {
    statusClass = "success";
  } else if (status === "pending") {
    statusClass = "pending";
  }

  return (
    <div className={`notification ${statusClass}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
