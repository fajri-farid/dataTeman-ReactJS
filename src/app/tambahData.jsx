import React from "react";
import { AddData } from "../components/addData";
import { BackHomeButton } from "../components/backHomeButton";
import { Analytics } from "@vercel/analytics/react";

export const TambahData = () => {
  return (
    <div className="main">
      <BackHomeButton />
      <h1 className="text-[1.8rem] md:text-[2rem] font-semibold text-center mt-10 mb-10">
        Masukkan Data Temanmu
      </h1>
      <AddData />
      <Analytics />
    </div>
  );
};
