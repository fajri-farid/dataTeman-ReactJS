import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataComponent } from "./data.jsx";
import { AddData } from "./addData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main>
      {/* <DataComponent /> */}
      <h2>tambah data section</h2>
      <AddData />
    </main>
  </React.StrictMode>
);
