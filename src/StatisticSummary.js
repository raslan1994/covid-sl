import React, { Component } from "react";
import { fetchDataFromApi } from "./data/api";
import { numberWithCommas } from "./data/helper";

export default class StatisticSummary extends Component {
  state = {
    isError: false,
    update_date_time: null,
    local_new_cases: 0,
    local_new_deaths: 0,
    local_total_cases: 0,
    local_total_number_of_individuals_in_hospitals: 0,
    local_deaths: 0,
    local_recovered: 0,
    local_active_cases: 0,
  };

  constructor(props) {
    super(props);
    this.loadData();
  }

  async loadData() {
    let result = await fetchDataFromApi();

    if (result.error) {
      this.setState({ isError: true });
      return;
    }
    let payload = result.payload.data;
    // console.log(payload);
    this.setState({
      update_date_time: payload.update_date_time,
      local_new_cases: payload.local_new_cases,
      local_new_deaths: payload.local_new_deaths,
      local_total_cases: payload.local_total_cases,
      local_total_number_of_individuals_in_hospitals:
        payload.local_total_number_of_individuals_in_hospitals,
      local_deaths: payload.local_deaths,
      local_recovered: payload.local_recovered,
      local_active_cases: payload.local_active_cases,
    });
  }

  renderItem(
    item = {
      value: "",
      label: "",
      description: "",
    },
    index = 0
  ) {
    return (
      <div key={index} className="feature col">
        <div className="card">
          <div className="card-body">
            <div className="feature-icon bg-primary bg-gradient">
              <span class="material-icons md-36">face</span>
            </div>
            <h2>{item.label}</h2>
            <p>{item.description}</p>
            <h4>{numberWithCommas(item.value)}</h4>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let {
      update_date_time,
      local_new_cases,
      local_new_deaths,
      local_total_cases,
      local_total_number_of_individuals_in_hospitals,
      local_deaths,
      local_recovered,
      local_active_cases,
    } = this.state;
    let items = [
      {
        label: "New Cases",
        description: "New cases identified within 24hrs",
        value: local_new_cases,
      },
      {
        label: "New Death",
        description: "New death reported within 24hrs",
        value: local_new_deaths,
      },
      {
        label: "Hospitalized",
        description: "Hospitalized number of individuals",
        value: local_total_number_of_individuals_in_hospitals,
      },
      {
        label: "Total Cases",
        description: "Number of cases identified yet",
        value: local_total_cases,
      },
      {
        label: "Active Cases",
        description: "Number of total active cases",
        value: local_active_cases,
      },
      {
        label: "Total Deaths",
        description: "Number of deths reported yet",
        value: local_deaths,
      },
      {
        label: "Recovered",
        description: "Number of recovered individuals",
        value: local_recovered,
      },
    ];
    return (
      <div className="container px-4 py-5" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {items.map((item, index) => this.renderItem(item, index))}
        </div>
      </div>
    );
  }
}
