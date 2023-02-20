import React from "react";

import { postsView } from "./Posts"

const PostList = (props) => {

    const postList = props.postList 

    return(
        <div id="posts-list">

            {postList.map((posts, idx) => {
                
                return <postsView posts={posts} key={`PostList:${idx}`}/>
                

            })}

        </div>)
}

export default PostList