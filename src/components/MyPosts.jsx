import React, {useState, useEffect} from "react";
import { getPosts } from "../API-Adapt";
import PostsView from "./Posts";

const MyPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await getPosts();
            const { data: {posts}, } = await response;
            setPosts(posts);
        }
        fetchPosts();
    }, []);
    let hasPosted = false;
    posts.forEach((post) => {
        if (post.isAuthor){
            hasPosted = true;
        }
    })
    return (
      <>
      {hasPosted ? ( 
        posts.map((post) => {
          if (post.isAuthor) {
            return <PostsView post={post} posts={posts} setPosts={setPosts} isAuthor={post.isAuthor} key={post._id} />;
          }
        })
      ) : (
             <p>You haven't posted anything.</p>
         )}
    
      </>
    );
  };
  export default MyPosts; 