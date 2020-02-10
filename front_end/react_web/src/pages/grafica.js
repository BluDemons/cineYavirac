import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const datos = {
  chart: {
    caption: "Porcentaje de Ventas",
    subcaption: "For all users in 2017",
    showpercentvalues: "1",
    defaultcenterlabel: "Android Distribution",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext:
      "<b>$percentValue</b> recaudado por <b>$label</b>",
    centerlabel: "# Users: $value",
    theme: "candy"
  },
  data: [
    {
      label: "Ice Cream Sandwich",
      value: "1000"
    },
    {
      label: "Jelly Bean",
      value: "5300"
    },
    {
      label: "Kitkat",
      value: "10500"
    },
    {
      label: "Lollipop",
      value: "18900"
    },
    {
      label: "Marshmallow",
      value: "17904"
    }
  ]
};
const chartConfigs = {
    type: 'pie2d',
    dataFormat: 'json',
    dataSource: datos,
  };

export default class Grafica extends Component {
  render() {
    return (
      <ReactFusioncharts
      {...chartConfigs}
      />
    );
  }
}
