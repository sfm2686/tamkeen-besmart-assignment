import React, { Component } from "react";
import axios from 'axios';
import Select from './select';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      country: "",
      city: ""
    }
    this.submit = this.submit.bind(this);
  }

  submit() {
    // front end validation
    // send data to nodejs backend
  }

  getDataFromDb() {
    fetch('http://localhost:8080/get-country-list')
    .then(res => res.json())
    .then((data) => {this.setState({data: data})});
  }

  render() {
    return (
      <div>
        <div class="jumbotron text-center">
          <div class="container">
            <h1>Tamkeen Coding Assignment</h1>
          </div>
        </div>
        <form id='form' on>
          <label>Name</label>
          <input type="text" class="form-control" placeholder="Add Name" />
          <br/>
          <label>Email</label>
          <input type="email" class="form-control" placeholder="Add Email" />
          <br/>
          <label>Age</label>
          <input class="form-control" placeholder="Add Age" />
          <br/>
          <Select />
          <br/>
          <button onSubmit={this.submit()} class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
