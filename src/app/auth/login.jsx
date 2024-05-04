import React from "react";
import { LoginComp } from "../../components/loginComp";
import { Analytics } from "@vercel/analytics/react";

export const Login = () => {
  return (
    <div>
      <LoginComp />
      <Analytics />
    </div>
  );
};
