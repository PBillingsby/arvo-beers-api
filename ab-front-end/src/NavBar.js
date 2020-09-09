import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="text-center">
      <NavLink className="mr-5" activeStyle={{ color: "#D2691E" }} to="/">
        Home
      </NavLink>
      <NavLink className="mr-5" activeStyle={{ color: "#D2691E" }} to="/beers">
        Beers
      </NavLink>
    </div>
  );
};

export default NavBar;
