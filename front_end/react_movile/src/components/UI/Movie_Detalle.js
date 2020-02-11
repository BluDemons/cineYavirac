import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import { Link } from "react-router-native";
import axios from "axios";

const API = "http://10.143.90.222:5000/cine/movie";

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: ""
    };
  }

  componentDidMount() {
    axios
      .get(API)
      .then(response => {
        this.setState({ peliculas: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  }
  parseData() {
    if (this.state.peliculas) {
      return this.state.peliculas.map((data, i) => {
        return (
          <View key={i}>
            <Text>{data.titulo}</Text>
            <Text>{data.resumen}</Text>
            <Text>{data.valorBoleto}</Text>
            <Text>{data.categoria}</Text>
          </View>
        );
      });
    }
  }

  render() {
    //const { peliculas } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/ticket.jpg")}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.header}>DETALLE DE LA PELÍCULA</Text>
          </View>
          <View>{this.parseData()}</View>
          <View style={styles.button}>
            <TouchableHighlight>
              <Link to="/">
                <Text style={styles.button}>Volver</Text>
              </Link>
            </TouchableHighlight>
            <TouchableHighlight>
              <Link to="/tickets">
                <Text style={styles.button}>Comprar</Text>
              </Link>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  top: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    color: "#fff",
    fontSize: 28,
    padding: 20,
    paddingRight: 40,
    paddingTop: 40
  },
  menuContainer: {
    height: "40%"
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  button: {
    color: "#fff",
    borderRadius: 100,
    fontWeight: "bold",
    textAlign:"center",
    flexDirection:"row",
    justifyContent:"space-between"
  }
});
