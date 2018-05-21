import React, { Component } from 'react';


class SearchForm extends Component {

  constructor(props) {
   super(props);
    this.state = {
        search: '',
        posts: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const query = this.state.search;
    const url = 'http://127.0.0.1:8000/posts/?q=' + query;
    await fetch(url)
      .then(data => data.json())
      .then((data) => { this.setState({ posts: data }) });
  }

    render() {
        return (
          <div className="form-div">
            <form name="blog_search" onSubmit={this.handleSubmit}>
              <label>You can search by Author, Content or Title</label>
              <input
                onChange={this.handleSearchChange}
                id="searchInput"
                type="text"/>
              <input type="submit" id="searchButton" value="Search!" />
            </form>
            <div>
              <h3>We found this posts</h3>
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
          </div>
        );
    }
}

export default SearchForm;