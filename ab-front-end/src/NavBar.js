import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="text-center">
      <NavLink className="mr-5" activeStyle={{ color: "#F6AB31" }} to="/">
        Home
      </NavLink>
      <NavLink className="mr-5" activeStyle={{ color: "#F6AB31" }} to="/beers">
        Beers
      </NavLink>
      <NavLink className="mr-5" activeStyle={{ color: "#F6AB31" }} to="/beers">
        Something else
      </NavLink>
    </div>
  );
};

export default NavBar;
