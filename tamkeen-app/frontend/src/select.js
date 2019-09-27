import React, { Component } from "react";
import axios from 'axios';

class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
     country: "",
     curr_country: "",
     cities: "",
     loading: true
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/get-country-list')
      .then(res => res.json())
      .then(res => {
        this.setState({
          countries: res,
          loading: false
        });
      });
  }

  handleCountryChange(e) {
    fetch('http://localhost:8080/get-cities?country=' + e.target.value)
      .then(res => res.json())
      .then(res => {
        alert(res);
        this.setState({
          cities: res,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <p class="bg-info">Loading Countries</p>
    }
    return (
      <select onChange={this.handleCountryChange} class="form-control">
        <option value="-">-</option>
        {this.state.countries.map(country =>
          <option value={country}>{country}</option>
        )};
      </select>
    );
  }
}

export default Select;
