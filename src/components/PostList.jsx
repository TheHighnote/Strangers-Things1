import React from "react";
import PostsView  from "./Posts"

const PostList = ({posts, setPosts}) => {
    return(
        <div id="posts-list">
            {posts?.map(post => {
                return <PostsView post={post} posts={posts} setPosts={setPosts} key={post._id}/>
            })}

        </div>)
}

export default PostList