import React, {useState, useEffect} from "react";
import { Navbar, postsView } from "./";
import getPosts from "../API-Adapt";
import PostList from "./PostList";

const Main = () => {
    const [posts, setPosts] = useState([])

    async function retrievePosts () {
        const myPosts = await getPosts()
        setPosts (myPosts.data.posts)
        console.log(myPosts)

    }
    useEffect(() => {
        retrievePosts()
    }, [])


    return(
        <div id="main">
            <Navbar />
            <PostList posts={posts}/>
        </div>
    )
}

export default Main