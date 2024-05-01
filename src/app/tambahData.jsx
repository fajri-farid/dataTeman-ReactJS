import React from "react";
import { AddData } from "../components/addData";

export const TambahData = () => {
  return (
    <div className="main">
      <h1 className="text-[2rem] font-semibold text-center mt-10 mb-10">Masukkan Data Temanmu</h1>
      <AddData />
    </div>
  );
};
