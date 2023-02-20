const url = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/"
async function getPosts () {
    try {
        const response = await fetch(`${url}posts`)

        const result = await response.json();
        return result
    } catch (error) {
        console.error(err);
    }
}
export default getPosts
