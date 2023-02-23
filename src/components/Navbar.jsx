import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to={"/"} id="title"><h2> Stranger's Things</h2></Link>
      <Link to={"/Login"}><button>Log in</button></Link>
      <Link to={"/Register"}><button>Sign up</button></Link>
      <Link to={"/CreatePost"}><button>New Post</button></Link>
    </div>
  );
};

export default Navbar;