import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/posts/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to BLOG Frontend</h1>
        </header>
        <h1>Post Index</h1>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
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

export default App;