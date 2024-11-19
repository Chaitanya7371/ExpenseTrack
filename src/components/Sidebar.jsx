import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="lg:w-[15%] sm:w-[35%] md:w-[30%] h-[100vh] bg-green">
      <div className="w-[100%] h-[10vh] bg-secondary flex justify-center items-center">
        <p className="text-textcolor text-[30px] font-bold">Goodbudget</p>
      </div>
      <div className="w-[90%] m-[21px]  bg-text flex flex-col gap-y-4">
        <Link to="/home">
          <p className="text-textcolor text-[18px] font-light cursor-pointer">
            Home
          </p>
        </Link>
        <hr className="text-textcolor" />
        <Link to="/expense">
          <p className="text-textcolor text-[18px] font-light cursor-pointer">
            Expenses
          </p>
        </Link>
        <hr className="text-textcolor" />
        <Link to="/income">
          <p className="text-textcolor text-[18px] font-light cursor-pointer">
            Income
          </p>
        </Link>
        <hr className="text-textcolor" />
      </div>
    </div>
  );
}

export default Sidebar;
