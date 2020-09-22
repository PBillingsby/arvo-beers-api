import React from "react";
import { NavLink } from "react-router-dom";

// PRESENTATIONAL
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
        to="/beers/new"
      >
        Add Beer
      </NavLink>
      <NavLink
        className="link-style"
        activeStyle={{ color: "rgb(255, 172, 46)" }}
        to="/beers"
      >
        Beers
      </NavLink>
      <NavLink
        className="link-style"
        activeStyle={{ color: "rgb(255, 172, 46)" }}
        to="/learn"
      >
        Learn
      </NavLink>
    </div>
  );
};

export default NavBar;
