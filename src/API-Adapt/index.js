const url = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/"
 export const getPosts = async () => {
    try {
        const response = await fetch(`${url}posts`)

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
        const {result} = await response.json();
        return result.token
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
        const {result} = await response.json();
        return result.token
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