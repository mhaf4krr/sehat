import React from "react";

import ReactApexChart from "react-apexcharts";

class ApexChartLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "RESULT",
          data: this.props.data,
        },
      ],
      options: {
        chart: {
          type: "area",
          stacked: false,
          height: 350,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: this.props.label,
          align: "left",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val.toFixed(2);
            },
          },
          title: {
            text: "RESULT",
          },
        },
        xaxis: {
          type: "datetime",
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return val.toFixed(2);
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div className='chart_holder'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='area'
          height={350}
        />
      </div>
    );
  }
}

export default ApexChartLine;
