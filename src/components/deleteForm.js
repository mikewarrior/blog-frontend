import React, { Component } from 'react';


class DeleteForm extends Component {
  
  constructor(props) {
     super(props);
      this.state = {
        id: ''
      };
      this.handleIdChange = this.handleIdChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleIdChange(event) {
    this.setState({
      id: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try{
      const postId = this.state.id;
      const url = 'http://127.0.0.1:8000/posts/'+ postId + '/delete';
      const response = await fetch(url,{ method: 'DELETE' });
      try{
        const posts = await response.json();
        alert(JSON.stringify(posts, null, 4) + ' Check your Post ID!!!.');
      } catch (error) {
        alert('Your post was deleted successfully!');
      }
    } catch(error){
      console.log(error)
    }
    
  }

  render() {
    return (
      <div className="form-div">
        <form name="blog_delete" onSubmit={this.handleSubmit}>
          <label>Post Id</label>
          <input
            value={this.state.id}
            onChange={this.handleIdChange}
            id="titleInput"
            type="text"/>
          <input type="submit" id="createButton" value="Delete Post"/>
        </form>
      </div>
    );
    }
}
export default DeleteForm;