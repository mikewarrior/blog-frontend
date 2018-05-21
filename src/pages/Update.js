import React, { Component } from 'react';
import '../css/App.css';
import UpdateForm from '../components/updateForm'


class Update extends Component {
  render () {
    return (
      <div>
        <h1>CUpdate a post</h1>
        <UpdateForm></UpdateForm>
      </div>
    );
  }
}

export default Update;