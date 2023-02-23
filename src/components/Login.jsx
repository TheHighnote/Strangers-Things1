import React, {useState} from "react";
import {loginUser} from "../API-Adapt"
import {useLocation} from "react-router-dom"

export function Login({setToken}) {
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
    // const location = useLocation();

    return (
        <form className="login" onSubmit={async(e)=>{
            try {
             e.preventDefault();
             const token = await loginUser(username,password)
             setToken(token)
             localStorage.setItem("token",token) 
            } catch (error) {
                console.error(error)
            }
        }}>
           <label>
            Username:
            <input
             type = "text"
             value = {username} 
             placeholder = "Username"
             required
             onChange={(e)=>setUsername(e.target.value)}
             />
            </label> 
            <label>
            Password:
            <input 
            type = "password" 
            value = {password} 
             placeholder = "Password"
             required
             onChange={(e)=>setPassword(e.target.value)}
            />
            </label> 
            <div>
                <button type = "submit" className="primary-button">Log in</button>
            </div>
        </form>

)}

export const checkUserLoggedIn = () => {
    const token = localStorage.getItem('token');
    return token ? true : false;
}