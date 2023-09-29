import React from "react";
import ReactDOM from "react-dom";
import RootRouter from "./RootRouter"; // or wherever your RootRouter is
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>
);
