import React, { Component } from "react";
import axios from 'axios';

class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
     country: "",
     curr_country: "",
     cities: "",
     loading: true,
     got_cities: false
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
        this.setState({
          cities: res,
          got_cities: true
        });
      });
  }

  populate_city() {
    if (this.state.got_cities) {
      return (
        <div>
          <label>City</label>
          <select class="form-control">
            <option value="-">-</option>
            {this.state.cities.map(city =>
              <option value={city}>{city}</option>
            )};
          </select>
        </div>
      );
    }
  }

  render() {
    if (this.state.loading) {
      return <p class="bg-info">Loading Countries</p>
    }
    return (
      <div>
        <label>Country</label>
        <select onChange={this.handleCountryChange} class="form-control">
          <option value="-">-</option>
          {this.state.countries.map(country =>
            <option value={country}>{country}</option>
          )};
        </select>
        <br/>
        {this.populate_city()}
      </div>
    );
  }
}

export default Select;
