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
import Update from "../pages/Update";
import Delete from "../pages/Delete";


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
                <li><NavLink to="/update">Update a post</NavLink></li>
                <li><NavLink to="/delete">Delete a post</NavLink></li>
              </ul>
              <div className="content">
                <Route path="/posts" component={Posts}/>
                <Route path="/search" component={Search}/>
                <Route path="/create" component={Create}/>
                <Route path="/update" component={Update}/>
                <Route path="/delete" component={Delete}/>
              </div>
          </div>
        </HashRouter>

    );
  }
}
 
export default Main;