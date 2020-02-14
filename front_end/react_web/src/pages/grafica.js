import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
//import axios from 'axios';

//const API = "http://10.143.90.222:5000/cine/movie";


// Resolves charts dependancy
charts(FusionCharts);

export default class Grafica extends Component {
  constructor(props) {
    super(props);
    this.state = {
        peliculas: [],
    };
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
        plottooltext:
          "<b>$percentValue</b> recaudado por <b>$label</b>",
        centerlabel: "# Users: $value",
        theme: "candy"
      },
      data: [{
        label:'Lolipop',
        value:'5300'
      },{
        label:'Candy',
        value:'18000'
      }      
      ]
    };
    const chartConfigs = {
      type: 'pie2d',
      dataSource: datos,
    };
    return (
      <ReactFusioncharts
      {...chartConfigs}
      />
    );
  }
}
