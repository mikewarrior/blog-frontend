import React, { Component } from 'react';
import '../css/App.css';
import DeleteForm from '../components/deleteForm'


class Delete extends Component {
  render () {
    return (
      <div>
        <h1>Delete a post</h1>
        <DeleteForm></DeleteForm>
      </div>
    );
  }
}

export default Delete;