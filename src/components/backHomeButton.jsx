import React from "react";
import { Link } from "react-router-dom";

export const BackHomeButton = () => {
  return (
    <div className="text-center">
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
};
