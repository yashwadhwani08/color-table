import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <NavLink to="/home">Home</NavLink>{" "}
      <NavLink to="/video-list">Video List</NavLink>
      {/* <NavLink to="/video-list/play-video/:vidID">Play Video</NavLink> */}
    </div>
  );
};

export default Navbar;
