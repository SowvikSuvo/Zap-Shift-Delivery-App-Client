import React from "react";

import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end gap-1">
      <img className="" src={logo} alt="" />
      <h3 className=" text-3xl font-bold -ms-4  -mb-1">
        Za<span className="text-primary">p</span>Shift
      </h3>
    </div>
  );
};

export default Logo;
