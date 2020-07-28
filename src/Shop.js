import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default class Shop extends Component {
  componentDidMount() {
    this.fetchItems();
  }

  state = {

     gmail : [1,2,3,4,5,6,7]
  }
 

  async fetchItems() {
    const data = await fetch("https://api.randomuser.me/");

    const json = await data.json();
    console.log(json);
  }
  render() {
    return (
      <div>{
          this.state.gmail.map(x => (
            <h1 key = {x}> 
            <Link to={`/shop/${x}}`}>{x}Item</Link>
            </h1>
          ))
      }
       
      </div>
    );
  }
}
