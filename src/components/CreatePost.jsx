import React, {useState} from "react";
import { createPost } from "../API-Adapt";


const CreatePost = ({token, posts, setPosts}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPost = await createPost(title, description, price, location, willDeliver)
            console.log("newPost:", newPost)
            const updatedPosts = setPosts([...posts, newPost])
            console.log(updatedPosts)
            return(updatedPosts)
        } catch (error) {
            console.error(error)
        }
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={e=> setPrice(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        </label>
        <label>
          Will Deliver:
        <input type="checkbox" checked={willDeliver} onChange={e => setWillDeliver(e.target.checked)} />
        </label>
        <button type="submit">Create Post</button>
      </form>
     );
  }
  export default CreatePost;