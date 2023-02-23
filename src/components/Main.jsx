import React, {useState, useEffect} from "react";
import { Navbar, postsView } from "./";
import {getPosts} from "../API-Adapt";
import PostList from "./PostList";
import {Login} from "./Login";

const Main = () => {
    const [posts, setPosts] = useState([])

    
    async function retrievePosts () {
        const myPosts = await getPosts()
        setPosts (myPosts.data.posts)
        console.log("myposts", myPosts)

    }
    useEffect(() => {
        retrievePosts()
    }, [])


    return(
        <div id="main">
            <PostList posts={posts}/>
        </div>
    )
}

export default Main