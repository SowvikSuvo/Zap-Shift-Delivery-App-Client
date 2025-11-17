import React from "react";

import logo from "../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-end gap-1">
        <img className="" src={logo} alt="" />
        <h3 className=" text-3xl font-bold -ms-4  -mb-1">
          Za<span className="text-primary">p</span>Shift
        </h3>
      </div>
    </Link>
  );
};

export default Logo;
