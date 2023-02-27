import React, {useState} from "react";
import EditPost from "./EditPost";
import PostsView  from "./Posts"

const PostList = ({posts, setPosts}) => {
    const [searchTerm, setSearchTerm] = useState('');
  

    const postMatches = (post, text) => {
      // return true if any of the fields you want to check against include the text
      // strings have an .includes() method 
      return Object.values(post).some(value => typeof value === 'string' && value.includes(text));
    }
  
    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;
    return(
        <div id="posts-list">
          <input className="search-bar" type="text" placeholder="Search Listings..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>  
            {postsToDisplay?.map(post => {
                return <PostsView post={post} posts={posts} setPosts={setPosts} key={post._id}/>
                        <EditPost token={token} posts={posts} setPosts={setPosts}/>
            })}

        </div>)
}

export default PostList