import React from "react";
import { Link } from "react-router-dom";
import { DataComponent } from "../components/data";
import { Header } from "../components/header";
import { AddCircle } from "iconsax-react";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="main flex justify-between items-center">
          <h1 className="text-[2rem] font-bold">Welcome to home</h1>
          <Link to="/tambah-data">
            <div className="md:block hidden">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Tambah data
              </button>
            </div>
            <div className="md:hidden block">
              <AddCircle size="32" color="#312e81" />
            </div>
          </Link>
        </div>
        <div>
          <DataComponent />
        </div>
      </div>
    </div>
  );
};
