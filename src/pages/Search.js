import React, {Component} from "react";
import SearchForm from '../components/searchForm'


class Search extends Component {

  render() {
      return (
        <div>
          <h1>Search for posts</h1>
          <SearchForm></SearchForm>
        </div>
      );
  }
}

export default Search;