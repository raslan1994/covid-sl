import React, { Component } from "react";
import { fetchDataFromApi } from "../data/api";
import { numberWithCommas } from "../data/helper";

export default class StatisticSummary extends Component {
  state = {
    isBusy: true,
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
    this.setState({ isBusy: true });
    let result = await fetchDataFromApi();
    this.setState({ isBusy: false });
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
      icon: "face",
      value: "",
      label: "",
      description: "",
      numberFromat: true,
    },
    index = 0
  ) {
    return (
      <div key={index} className="feature col">
        <div className="card">
          <div className="card-body">
            <div className="feature-icon bg-primary bg-gradient">
              <span className="material-icons md-36">{item.icon}</span>
            </div>
            <h2>{item.label}</h2>
            <p>{item.description}</p>
            <h4>
              {item.numberFromat ? numberWithCommas(item.value) : item.value}
            </h4>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let {
      isBusy,
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
        icon: "coronavirus",
        label: "New Cases",
        description: "New cases identified within 24hrs",
        value: local_new_cases,
        numberFromat: true,
      },
      {
        icon: "sentiment_very_dissatisfied",
        label: "New Deaths",
        description: "New deaths reported within 24hrs",
        value: local_new_deaths,
        numberFromat: true,
      },
      {
        icon: "local_hospital",
        label: "Hospitalized",
        description: "Hospitalized number of individuals",
        value: local_total_number_of_individuals_in_hospitals,
        numberFromat: true,
      },
      {
        icon: "coronavirus",
        label: "Total Cases",
        description: "Number of cases identified yet",
        value: local_total_cases,
        numberFromat: true,
      },
      {
        icon: "masks",
        label: "Active Cases",
        description: "Number of total active cases",
        value: local_active_cases,
        numberFromat: true,
      },
      {
        icon: "sentiment_very_dissatisfied",
        label: "Total Deaths",
        description: "Number of deths reported yet",
        value: local_deaths,
        numberFromat: true,
      },
      {
        icon: "verified",
        label: "Recovered",
        description: "Number of recovered individuals",
        value: local_recovered,
        numberFromat: true,
      },
      {
        icon: "update",
        label: "Data",
        description: "Last updated on",
        value: update_date_time,
        numberFromat: false,
      },
    ];
    return [
      <div
        className="container"
        style={{ textAlign: "center" }}
        id="featured-2"
      >
        <button
          className="btn btn-primary"
          onClick={() => {
            this.loadData();
          }}
          disabled={isBusy}
        >
          {isBusy ? "Data is being refreshed..." : "Refresh Data"}
        </button>
      </div>,
      <div className="container px-4 py-5" id="featured-3">
        <div className="row g-4 row-cols-1 row-cols-lg-3">
          {items.map((item, index) => this.renderItem(item, index))}
        </div>
      </div>,
    ];
  }
}
