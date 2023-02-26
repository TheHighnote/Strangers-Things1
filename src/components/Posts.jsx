import React from "react";
import { deletePost } from "../API-Adapt";

const PostsView = ({post, posts, setPosts}) => {
    const handleDelete = (id) => {
        deletePost(id, {setPosts, posts})
        setPosts(posts.filter(post => post._id !== id));
}
    return (
        <>
        <div id="post-view">
            <h1 id="title">{post.title}</h1>
            <h3 id="description">{post.description}</h3>
            <h3 id="price">Price: {post.price}</h3>
            <h3 id="location">Location: {post.location}</h3>
            {post.isAuthor ? (
                <button onClick={() => handleDelete(post._id)}>Delete</button>
                ):null
                }
        </div>
        </>
    );
}


export default PostsView