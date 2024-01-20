import React from "react";
import ReactDOM from "react-dom/client";
// import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-kqw31ze3brrhj688.eu.auth0.com"
      clientId="S6Gii1CBLoJd9n5DnphdyOeMLtLk6m2R"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    > */}
    <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
