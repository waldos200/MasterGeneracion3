import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Home from "./Home";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <a href="http:/page/about" target="_blank" rel="noopener noreferrer">
            {" "}
            Afuera
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;