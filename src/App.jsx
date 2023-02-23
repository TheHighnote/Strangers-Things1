import { useEffect, useState } from "react";
import { Navbar, Main } from "./components";
import AllRoutes from "./components/Routes";
import "./App.css";
import { fetchMe } from "./API-Adapt";

function App() {
    const [user, setUser] = useState({});
    const [token, setToken] = useState({});
    const [posts, setPosts] = useState([])

    useEffect (() => {
        if (Object.keys(user).length === 0) {
            const getMe = async () => {
                const response = await fetchMe();
                const user = await response;
                setUser(user)
                console.log (user, "signed in")
            }
            getMe()
        }
    }, [user])

    return (<div className="App">
        <Navbar user={user} />
        <AllRoutes posts={posts} setPosts={setPosts}token={token} setToken={setToken} user={user} />
    </div>
    );
}

export default App;