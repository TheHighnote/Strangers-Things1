import React, {useState, useEffect} from "react";
import { Navbar } from "./";
import getPosts from "../API-Adapt";

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
        </div>
    )
}

export default Main