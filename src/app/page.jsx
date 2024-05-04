import React from "react";
import { Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

export const Page = () => {
  return (
    <div className="main flex flex-col justify-center items-center h-screen">
      <div>
        <h1 className="text-[3rem] text-center">Welcome to Data Teman📝</h1>
        <h3 className="text-[1.5rem] text-center">
          Simpan Data Temanmu Disini
        </h3>
      </div>
      <div className="mt-4">
        <Link to="/login">
          <button className="border-2 p-2 rounded-lg bg-indigo-600 text-white border-indigo-600 text-[1rem] hover:text-[1.05rem] hover:bg-indigo-700 hover:border-indigo-700">
            Let's Get Started
          </button>
        </Link>
      </div>
      <Analytics />
    </div>
  );
};
