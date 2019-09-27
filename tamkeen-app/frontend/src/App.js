import React, { Component } from "react";
import axios from 'axios';
import Select from './select';

class App extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //  countries: "",
    //  curr_country: "",
    //  cities: "",
    //  loading: true
    // };
    // this.getDataFromDb = this.getDataFromDb.bind(this);
  }

  getDataFromDb() {
    // fetch('http://localhost:8080/')
    //   .then((data) => return data.json());
    fetch('http://localhost:8080/get-country-list')
    .then(res => res.json())
    .then((data) => {this.setState({data: data})});
  }

// I'M READY TO USE THE BACK END APIS! :-) method_call:{this.getDataFromDb()} {this.state.data}
// <Select />
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
          <button class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
