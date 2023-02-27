const url = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/"
 export const getPosts = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${url}posts`, {

          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

 export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${url}users/register`,
        {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          }
        })
    })
        const {data} = await response.json();
        console.log(data.token)
        return data.token
    } catch (error) {
        console.error(error)
    }
}

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${url}users/login`,
        {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          }
        })
    })
        const {data} = await response.json();
        console.log(data.token)
        return data.token
    } catch (error) {
        console.error(error)
    }
}

export const fetchMe = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${url}users/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};
export const createPost = async (title, description, price, location, willDeliver) => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`${url}posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver
          }
        })
      })
      const result = await response.json()
      console.log(result);
      return result
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePost = async (id) => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`${url}/posts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (error) {
      console.error(error);
    }
  }

  export const editPost = async (title, description, price, location, willDeliver) => {
    try {
      const response = await fetch(`${url}posts/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver
          }
        })
      })
      const result = await response.json()
      console.log(result);
      return result
    } catch (error) {
      console.log(error);
    }
  };
