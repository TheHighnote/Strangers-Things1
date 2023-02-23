import React from "react";
import { Routes, Route } from "react-router-dom"
import Main from "./Main";
import { Login } from "./Login";
import { Register } from "./Register";
import CreatePost from "./CreatePost"

const AllRoutes = ({setToken}) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<Login setToken={setToken}/>}></Route>
                <Route path="/register" element={<Register setToken={setToken}/>}></Route>
                <Route path="/CreatePost" element={<CreatePost/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;