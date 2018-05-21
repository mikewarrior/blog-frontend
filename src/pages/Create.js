import React, { Component } from 'react';
import '../css/App.css';
import CreateForm from '../components/createForm'


class Create extends Component {
  render () {
    return (
      <div>
        <h1>Create a post</h1>
        <CreateForm></CreateForm>
      </div>
    );
  }
}

export default Create;