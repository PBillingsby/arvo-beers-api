import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="text-center">
      <NavLink
        exact
        className="link-style"
        activeStyle={{ color: "rgb(255, 172, 46)" }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="link-style"
        activeStyle={{ color: "rgb(255, 172, 46)" }}
        to="/beers"
      >
        Beers
      </NavLink>
    </div>
  );
};

export default NavBar;
