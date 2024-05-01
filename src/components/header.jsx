import { Logout } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-indigo-900 p-3 flex justify-between items-center">
      <p></p>
      <h2 className="text-white text-center text-[1.5rem] font-bold">
        Data Teman
      </h2>
      <Link to="/">
        <div className="md:block hidden mr-8">
          <button className="text-white text-md">log out</button>
        </div>
        <div className="md:hidden block mr-4">
          <Logout color="white" />
        </div>
      </Link>
    </div>
  );
};
