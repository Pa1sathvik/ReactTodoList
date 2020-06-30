import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import TodoList from "./components/TodoList.js";
import AboutPage from "./AboutPage.js";
import Shop from "./Shop.js";
import Nav from "./Nav.js";
import ItemDetail from "./ItemDetail.js";
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import shortid from "shortid";

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <div>
    <Nav />
      <Switch>
      <Route path = "/" exact component = {TodoList}/>
      <Route path = "/about" component = {AboutPage}/>
      <Route path = "/shop" component = {Shop}/>
      <Route path = "/shop/:id" component = {ItemDetail} />
      </Switch>
    </div>
  </React.StrictMode>
  </Router>,
  document.getElementById("root")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
