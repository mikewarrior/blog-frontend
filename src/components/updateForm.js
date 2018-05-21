import React, { Component } from 'react';


class UpdateForm extends Component {
  
  constructor(props) {
     super(props);
      this.state = {
        id: '',
        title: '',
        author: '',
        content: '',
        posts: []
      };
      this.handleIdChange = this.handleIdChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleAuthorChange = this.handleAuthorChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleIdChange(event) {
    this.setState({
      id: event.target.value
    });
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleAuthorChange(event) {
    this.setState({
      author: event.target.value
    });
  }
  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try{
      const postId = this.state.id;
      const url = 'http://127.0.0.1:8000/posts/' + postId + '/edit';
      const response = await fetch(url,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          author: this.state.author,
          content: this.state.content
        })
      });
      const posts = await response.json();
      alert('Here is your brand new post--->' + JSON.stringify(posts, null, 4));
    } catch(error){
      console.log(error)
    }
    
  }

  render() {
    return (
      <div className="form-div">
        <form name="blog_update" onSubmit={this.handleSubmit}>
          <label>POST ID</label>
          <input
            value={this.state.id}  
            onChange={this.handleIdChange}
            id="idInput"
            type="text"/>
          <label>Title</label>
          <input
            value={this.state.title}  
            onChange={this.handleTitleChange}
            id="titleInput"
            type="text"/>
          <label>Author</label>
          <input
            value={this.state.author}
            onChange={this.handleAuthorChange}
            id="authorInput"
            type="text"/>
          <label>Content</label>
          <input
            value={this.state.content}
            onChange={this.handleContentChange}
            id="contentInput"
            type="textarea"/>
          <input type="submit" id="createButton" value="Update Post"/>
        </form>
      </div>
    );
    }
}
export default UpdateForm;