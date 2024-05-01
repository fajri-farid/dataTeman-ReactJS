import React from "react";
import { Link } from "react-router-dom";
import { DataComponent } from "../components/data";
import { Header } from "../components/header";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <h1>Welcome to home</h1>
        <div>
          <DataComponent />
        </div>
        <Link to="/tambah-data">
          <button>tambah data</button>
        </Link>
      </div>
    </div>
  );
};
