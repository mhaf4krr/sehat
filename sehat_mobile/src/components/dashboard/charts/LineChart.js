import React, { Component } from "react";

import * as d3 from "d3";

export default class LineChart extends Component {
  canvasRef = React.createRef();
  graphUpdate = null;
  state = {
    data: null,
    label: this.props.label,
  };
  render() {
    return (
      <div className='chart_holder'>
        <p className='chart_holder_label'> {this.state.label} </p>
        <div className='svg_container' ref={this.canvasRef}></div>
      </div>
    );
  }

  componentDidMount() {
    this.graphUpdate = this.createLineChart();

    console.log(this.graphUpdate);

    // let main_interval = setInterval(() => {
    //   temp_data.push({
    //     date: `${new Date()}`,
    //     value: Math.round(Math.random() * 100),
    //   });
    // }, 100);

    // setTimeout(() => {
    //   this.setState({ data: temp_data });
    //   clearInterval(main_interval);
    //   console.log(temp_data);
    //   this.graphUpdate(temp_data);
    // }, 1000);

    this.graphUpdate(this.props.DATA);
  }

  componentDidUpdate() {
    // this.graphUpdate(this.state.data);
  }

  createLineChart() {
    const canvas = d3.select(this.canvasRef.current);
    const margin = {
      top: 40,
      right: 20,
      bottom: 50,
      left: 100,
    };

    const graphWidth = 560 - margin.left - margin.right;
    const graphHeight = 400 - margin.top - margin.bottom;

    const svg = canvas
      .append("svg")

      .attr("width", graphWidth + margin.right + margin.left)
      .attr("height", graphHeight + margin.top + margin.bottom);

    const graph = svg
      .append("g")
      .attr("width", graphWidth)
      .attr("height", graphHeight)
      .attr("transform", `translate(${(margin.left, margin.top)})`);

    /* Scales */

    const x = d3.scaleTime().range([0, graphWidth]);
    const y = d3.scaleLinear().range([graphHeight, 0]);

    /* Axes Group */

    const xAxisGroup = graph
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${graphHeight})`);

    const yAxisGroup = graph.append("g").attr("class", "y-axis");

    // D3 Line path Generator

    const line = d3
      .line()
      .x(function (d) {
        return x(new Date(d.date));
      })
      .y(function (d) {
        return y(d.value);
      })
      .curve(d3.curveMonotoneX);
    const path = graph.append("path");

    return function update(data) {
      /* Sort Data based on Date */

      data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      console.log(data);

      //set scales
      x.domain(d3.extent(data, (d) => new Date(d.date)));
      y.domain([d3.min(data, (d) => d.value), d3.max(data, (d) => d.value)]);

      // Update Path

      path
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "orange")
        .attr("storke-width", 2)
        .attr("d", line);

      // create circles

      const circles = graph
        .selectAll("circle")
        .data(data)
        .join(
          (enter) => {
            enter
              .append("circle")
              .attr("r", 4)
              .attr("cx", (d) => x(new Date(d.date)))
              .attr("cy", (d) => y(d.value))
              .attr("fill", (d) => {
                return d.value > 50 ? "red" : "green";
              });
          },
          (update) => {
            update
              .attr("r", 4)
              .attr("cx", (d) => x(new Date(d.date)))
              .attr("cy", (d) => y(d.value))
              .attr("fill", (d) => {
                return d.value > this.props.RANGE.min &&
                  d.value < this.props.RANGE.max
                  ? "green"
                  : "red";
              });
          },

          (exit) => exit.remove()
        );

      // create axes

      const xAxis = d3.axisBottom(x);

      const yAxis = d3.axisLeft(y);

      // Call Axes

      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);
    };
  }
}
