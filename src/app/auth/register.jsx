import React from "react";
import { RegistComp } from "../../components/registComp";
import { Analytics } from "@vercel/analytics/react";

export const Register = () => {
  return (
    <div>
      <RegistComp />
      <Analytics />
    </div>
  );
};
