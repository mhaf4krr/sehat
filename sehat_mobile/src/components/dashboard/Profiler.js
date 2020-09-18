import React, { Component } from "react";

import LineChart from "./charts/LineChart";

import ApexChartLine from "./charts/ApexLineChart";

import "./dashboard.css";
import Icon from "./Icon";

export default class Profiler extends Component {
  state = {
    data: null,
    user: this.props.user,
    apexdata: null,
  };
  svgRef = React.createRef();

  render() {
    let generateCharts = () => {
      try {
        let elements = [];
        if (this.state.data) {
          for (let entry in this.state.data) {
            console.log(entry);
            elements.push(
              <LineChart
                key={entry}
                RANGE={this.state.data[entry].RANGE}
                DATA={this.state.data[entry].RESULTS}
                label={entry}
              />
            );
          }

          return elements;
        }

        return null;
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    let generateApexLine = () => {
      try {
        if (this.state.data) {
          console.log("Going In");
          let tempdata = [];
          console.log(this.state.data);

          let elems = [];

          for (let test in this.state.data) {
            let tempdata = [];
            this.state.data[test].RESULTS.forEach((result) => {
              tempdata.push([Date.parse(result.date), parseInt(result.value)]);
            });

            elems.push(<ApexChartLine label={test} data={tempdata} />);
          }

          return elems;
        } else return null;
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
      <div>
        {generateApexLine()}
        {/* {generateCharts()} */}
      </div>
    );
  }

  componentDidMount() {
    this.FetchUserChartData();
  }

  componentDidUpdate() {
    //this.generateGraph();
  }

  async FetchUserChartData() {
    try {
      let response = await fetch(
        "https://sehat.hyderdevelops.ml/chart/generateChartData?phone=" +
          this.state.user.PHONE,
        // this.state.user.PHONE,
        { method: "POST" }
      );

      let res_data = await response.json();
      console.log(res_data);
      this.setState({ data: res_data });
      this.setState({ data: res_data });
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
}
