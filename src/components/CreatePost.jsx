import React, {useState} from "react";
// import { createPost } from "../API-Adapt";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={setTitle} />
        </label>
        <input type="submit" value="Submit" />
        <label>
          Description:
          <input type="text" value={description} onChange={setDescription} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={setPrice} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={setLocation} />
        </label>
      </form>
     );
  }
  export default CreatePost;