import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import axios from "axios";

const API = "http://localhost:5000/cine/query4";

// Resolves charts dependancy
charts(FusionCharts);

export default class Grafica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reporte: []
    };
  }

  componentDidMount() {
    axios
      .get(API)
      .then(response => {
        this.setState({ reporte: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    //const {peliculas} = this.state;
    const datos = {
      chart: {
        caption: "Porcentaje de Ventas",
        subcaption: "Películas más aceptadas por los usuario",
        showpercentvalues: "1",
        defaultcenterlabel: "Peliculas",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext: "<b>$percentValue</b> recaudado por <b>$label</b>",
        centerlabel: "# Users: $value",
        legendIconScale: "2",
        theme: "fusion",
        baseFont: "Italy",
        baseFontSize: "15",
        baseFontColor: "#008080",
      },
      data: this.state.reporte
    };
    const chartConfigs = {
      type: "pie3d",
      dataSource: datos,
      renderAt: "chart-container",
      width:800
    };
    return (<ReactFusioncharts {...chartConfigs} />);
  }
}
