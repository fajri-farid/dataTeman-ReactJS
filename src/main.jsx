import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main>
      <App />
      {/* <DataComponent />
      <h2>tambah data section</h2>
      <Link to="/tambah-data">
        <button className="border-2 border-black mt-4">tambah data</button>
      </Link> */}
    </main>
  </React.StrictMode>
);
