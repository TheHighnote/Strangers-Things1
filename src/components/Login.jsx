import React from "react";

export default function Login() {
    return (
        <form>
           <span>
            <p>Username</p>
            <input type = "text" />
            </span> 
            <span>
            <p>Password</p>
            <input type = "password" />
            </span> 
            <div>
                <button type = "submit" >Submit</button>
            </div>
        </form>

)
}