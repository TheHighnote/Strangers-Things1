import React from "react";

import { posts } from "./Posts"

const postList = (props) => {

    const posts = props.posts 

    return {
        <div id="postslist">
            {
            post.map((posts, idx) => {
                return (
                    <Post posts = {posts} key={`postList:${idx}`}/>
                )
            }) :null}
        }


        </div>
    }
}