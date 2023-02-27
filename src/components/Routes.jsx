import React from "react";
import { Routes, Route } from "react-router-dom"
import Main from "./Main";
import { Login } from "./Login";
import { Register } from "./Register";
import CreatePost from "./CreatePost"
import MyPosts from "./MyPosts";
import EditPost from "./EditPost"
import Messages from "./Messages"
import MessagePosts from "./MessagePosts"

const AllRoutes = ({posts, setPosts, setToken, token, user}) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main posts={posts} setPosts={setPosts}/>}></Route>
                <Route path="/login" element={<Login setToken={setToken}/>}></Route>
                <Route path="/register" element={<Register setToken={setToken}/>}></Route>
                <Route path="/CreatePost" element={<CreatePost posts={posts} setPosts={setPosts} token={token}/>}></Route>
                <Route path="/MyPosts" element={<MyPosts />}></Route>
                <Route path="/EditPost" element={<EditPost posts={posts} setPosts={setPosts} token={token}/>}></Route>
                <Route path="/MessagePosts" element={<MessagePosts />}></Route>
                <Route path="/Messages" element={<Messages user={user}/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;