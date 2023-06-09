"use client";

import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Toast = () => {
  const onClick = () =>
    toast("Toast is good", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
    });
  return (
    <div>
      <button onClick={onClick}> Click Me</button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
