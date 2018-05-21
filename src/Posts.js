import React, { Component } from 'react';
import './App.css';


class Posts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://127.0.0.1:8000/posts/');
      const posts = await response.json();
      this.setState({
        posts
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1>See all posts</h1>
        {this.state.posts.map(item => (
          <div  className="posts-items" key={item.id}>
            <h1>{item.id} - {item.title}</h1>
            <h3>Author: {item.author}</h3>
            <span><b>Created at:</b>{item.creation_date}</span> |
            <span><b> Publish at:</b>{item.publish_date}</span>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;