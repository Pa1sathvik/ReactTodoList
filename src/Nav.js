import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav>
      <Link to = "/">
        <h3>TodoList</h3>
        </Link>
        <ul className="nav-links">
          <Link style = {{color:'white'}} to="/about">
            <li>About</li>
          </Link>
          <Link style = {{color:'white'}} to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
