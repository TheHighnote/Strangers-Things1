import React, {useState} from "react";
import { registerUser } from "../API-Adapt";
import { useLocation } from "react-router-dom";

export function Register({setToken}) {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [confirmPassword, setConfirmPassword]= useState("")
    const location = useLocation();
    const comparePasswords = (username, password, confirmPassword) => {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return false;
        } else {
            return true;
        }
    }
    return (
        <div>
            <form className="user" onSubmit={async (e) => {
                try {
                   e.preventDefault();
                   if (comparePasswords(username, password, confirmPassword)) {
                    const token = await registerUser(username, password)
                    setToken(token);
                    localStorage.setItem("token",token);
                    location.pathname = '/';
                   }
                } catch (error) {
                    
                }
            }}>
                <div id="register">
                <label>Username:
                <input 
                value={username} 
                minLength={4} 
                maxLength={12} 
                type="text" 
                placeholder="Username" 
                required 
                onChange={(e)=>setUsername(e.target.value)}/></label>
              <label>
                Password:
                <input 
                value={password} 
                minLength={8} 
                type="password" 
                placeholder="Password" 
                required
                onChange={(e)=>setPassword(e.target.value)}/></label>
              <label>
                Confirm: 
                <input 
                value={confirmPassword} 
                minLength={8} 
                type="password" 
                placeholder="Confirm Password" 
                required
                onChange={(e)=>setConfirmPassword(e.target.value)}/></label>
                <button type="submit">Create Account</button>
            </div>
            </form>
        </div>
    )
}
export default Register;
