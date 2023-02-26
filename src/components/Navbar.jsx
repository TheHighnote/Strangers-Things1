import React from "react";
import { Link } from "react-router-dom";
import { checkUserLoggedIn } from "./Login";
import { useLocation } from "react-router-dom";


const Navbar = ({user, setUser, token, setToken}) => {
  const location = useLocation()
  const handleSignOut = () =>{
    localStorage.removeItem('token')
    setToken(null)
    location.pathname='/'
  }
  return (
    <div id="navbar">
      <Link to={"/"} id="title"><h2> Stranger's Things</h2></Link>
      <div id="nav-buttons">
      <Link to={"/Login"}><button>Log in</button></Link>
      <Link to={"/Register"}><button>Sign up</button></Link>
      <Link to={"/CreatePost"}><button>New Post</button></Link>
      </div>
    </div>
  );
};

export default Navbar;