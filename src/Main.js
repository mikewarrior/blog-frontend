import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
 
class Main extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to BLOG Frontend</h1>
          </header>
          <h1>Simple Blog</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/posts">See all posts</a></li>
            <li><a href="/search">Search for posts</a></li>
            <li><a href="/create">Create a post</a></li>
            <li><a href="/update">Update a post</a></li>
            <li><a href="/delete">Delete a post</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;