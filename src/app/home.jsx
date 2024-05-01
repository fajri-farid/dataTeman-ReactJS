import React from "react";
import { Link } from "react-router-dom";
import { DataComponent } from "../components/data";

export const Home = () => {
  return (
    <div>
      <h1>Welcome to home</h1>
      <div>
        <DataComponent />
      </div>
      <Link to="/tambah-data">
        <button>tambah data</button>
      </Link>
    </div>
  );
};
