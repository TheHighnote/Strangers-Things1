import React, {useState, useEffect} from "react";
import {getPosts} from "../API-Adapt";
import PostList from "./PostList";

const Main = ({posts, setPosts}) => {

    
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