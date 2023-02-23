import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to={"/"}><h2> Stranger's Things</h2></Link>
      <Link to={"/Login"}><button>Login</button></Link>
      <Link to={"/Register"}><button>Register</button></Link>
    </div>
  );
};

export default Navbar;