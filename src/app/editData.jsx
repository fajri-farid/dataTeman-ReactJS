import React from "react";
import { DataEdit } from "../components/dataEdit";
import { BackHomeButton } from "../components/backHomeButton";
import { Analytics } from "@vercel/analytics/react";

export const EditData = () => {
  return (
    <div className="main">
      <BackHomeButton />
      <h1 className="text-[1.8rem] md:text-[2rem] font-semibold text-center mt-4 md:mt-10 md:mb-10">
        Edit Data Temanmu
      </h1>
      <DataEdit />
      <Analytics />
    </div>
  );
};
