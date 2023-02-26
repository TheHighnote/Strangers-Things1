import React, {useState} from "react";
import { createPost } from "../API-Adapt";
import { AllRoutes } from "./Routes"


const CreatePost = ({token, posts, setPosts}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newWillDeliver, setNewWillDeliver] = useState(false)
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
        <div id="new-post">
        <label>
          Title:
          <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={newPrice} onChange={e=> setNewPrice(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={newLocation} onChange={e => setNewLocation(e.target.value)} />
        </label>
        <label>
          Will Deliver:
        <input type="checkbox" checked={newWillDeliver} onChange={e => setNewWillDeliver(e.target.checked)} />
        </label>
        <button type="submit">Update Post</button>
        </div>
      </form>
     );
  }
  export default EditPost;