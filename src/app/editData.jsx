import React from "react";
import { DataEdit } from "../components/dataEdit";

export const EditData = () => {
  return (
    <div>
      <h1 className="text-[2rem] font-semibold text-center mt-4 md:mt-10 md:mb-10">
        Edit Data Temanmu
      </h1>
      <DataEdit />
    </div>
  );
};
