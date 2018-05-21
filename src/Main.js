import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Posts from "./Posts";
import Search from "./Search";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to BLOG Frontend</h1>
            </header>
              <h1>Simple Blog</h1>
              <ul>
                <li>Home</li>
                <li><NavLink to="/posts">See all posts</NavLink></li>
                <li><NavLink to="/search">Search for posts</NavLink></li>
                <li><a href="/create">Create a post</a></li>
                <li><a href="/update">Update a post</a></li>
                <li><a href="/delete">Delete a post</a></li>
              </ul>
              <div className="content">
                <Route path="/posts" component={Posts}/>
                <Route path="/search" component={Search}/>
              </div>
          </div>
        </HashRouter>

    );
  }
}
 
export default Main;