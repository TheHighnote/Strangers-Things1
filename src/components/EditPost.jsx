import React, {useState} from "react";
import { editPost } from "../API-Adapt";
import { Link, useLocation, useNavigate } from "react-router-dom";


const EditPost = ({token, posts, setPosts}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newWillDeliver, setNewWillDeliver] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPost = await editPost(token, newTitle, newDescription, newPrice, newLocation, newWillDeliver)
            console.log("newPost:", newPost)
            console.log(posts)
            setPosts([...posts, newPost])
            navigate('/')
            
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