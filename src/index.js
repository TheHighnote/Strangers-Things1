import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// const root = document.getElementById("app");
// const root = ReactDOM.createRoot(document.getElementById('app'));

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )

// root.render(<Main/>);
