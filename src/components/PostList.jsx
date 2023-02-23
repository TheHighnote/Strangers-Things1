import React from "react";
import PostsView  from "./Posts"

const PostList = ({posts}) => {
    return(
        <div id="posts-list">
            {posts?.map(post => {
                return <PostsView post={post} key={post._id}/>
            })}

        </div>)
}

export default PostList