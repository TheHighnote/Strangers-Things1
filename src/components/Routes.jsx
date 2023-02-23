import React from "react";
import { Routes, Route } from "react-router-dom"
import Main from "./Main";
import { Login } from "./Login";
import { Register } from "./Register";
import CreatePost from "./CreatePost"

const AllRoutes = ({posts, setPosts, setToken, token}) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main posts={posts} setPosts={setPosts}/>}></Route>
                <Route path="/login" element={<Login setToken={setToken}/>}></Route>
                <Route path="/register" element={<Register setToken={setToken}/>}></Route>
                <Route path="/CreatePost" element={<CreatePost posts={posts} setPosts={setPosts} token={token}/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;