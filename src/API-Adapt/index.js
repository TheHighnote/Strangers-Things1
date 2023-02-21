const url = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/"
 const getPosts = async () => {
    try {
        const response = await fetch(`${url}posts`)

        const result = await response.json();
        return result
    } catch (error) {
        console.error(err);
    }
}

 const getRegistered = async () => {
    try {
        const response = await fetch(`${url}users/register`)

        const result = await response.json();
        return result
    } catch (error) {
        console.error(err)
    }
}

export default { getPosts, getRegistered };
// export default getPosts