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
        {checkUserLoggedIn()?
          <div>
          <b id="welcome">Welcome, {user?.data?.username}!</b>
          <input id="search" type="text" placeholder="search listings..."/>
          <br/>
          <Link to={"/CreatePost"}><button>New Post</button></Link>
          <Link to={"/MyPosts"}><button>My Listings</button></Link>
          <Link to={"/Messages"}><button>Messages</button></Link>
          <button type="button" onClick={() => {handleSignOut()}}>Sign Out</button>
          </div>
          :
          <div>
          <Link to={"/Login"}><button>Log in</button></Link>
          <Link to={"/Register"}><button>Sign up</button></Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;