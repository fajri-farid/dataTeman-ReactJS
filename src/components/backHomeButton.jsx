import React from "react";
import { Link } from "react-router-dom";

export const BackHomeButton = () => {
  return (
    <div className="text-center">
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};
