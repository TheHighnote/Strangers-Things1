import React from "react";


const PostsView = ({post}) => {

    console.log("postsview", post)
    return (
        <>
        <div id="post-view">
            <h1 id="title">{post.title}</h1>
            <h3 id="description">{post.description}</h3>
            <h3 id="price">{post.price}</h3>
            <h3 id="location">{post.location}</h3>
        </div>
        </>
    );
}

export default PostsView