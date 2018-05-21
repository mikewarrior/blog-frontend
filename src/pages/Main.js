import React, { Component } from "react";
import logo from '../images/logo.svg';
import '../css/App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Posts from "../pages/Posts";
import Search from "../pages/Search";
import Create from "../pages/Create";


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
                <li><NavLink to="/create">Create a post</NavLink></li>
                <li><a href="/update">Update a post</a></li>
                <li><a href="/delete">Delete a post</a></li>
              </ul>
              <div className="content">
                <Route path="/posts" component={Posts}/>
                <Route path="/search" component={Search}/>
                <Route path="/create" component={Create}/>
              </div>
          </div>
        </HashRouter>

    );
  }
}
 
export default Main;