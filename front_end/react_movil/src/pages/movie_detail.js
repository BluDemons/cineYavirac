import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  RefreshControl,
  TouchableHighlight,
  ScrollView,
  AsyncStorage,
  Alert
} from "react-native";
import { Card } from "react-native-elements";
import { Link } from "react-router-native";
import { RadioButton } from "react-native-paper";
import axios from "axios";

const API = "http://192.168.0.112:5000/cine/";

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: "",
      pelicula: [],
      sala_peliculas: [],
      //
      idpelicula: "",
      refreshing: false
    };
  }

  getData = () => {
    axios
      .get(`${API}pelicula?id=${this.state.idpelicula}`)
      .then(response => {
        this.setState({ pelicula: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(`${API}raw2?idpelicula=${this.state.idpelicula}`)
      .then(response => {
        this.setState({ sala_peliculas: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  };

  _onRefresh = () => {
    axios
      .get(`${API}raw2?idpelicula=${this.state.idpelicula}`)
      .then(response => {
        this.setState({ sala_peliculas: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleRefresh = () => {
    this.setState(
      { page: 1, refreshing: true, seed: this.state.seed + 1 },
      () => {
        this.getData();
      }
    );
  };

  asyncstorageSave_idsala_peliculas = async id => {
    try {
      await AsyncStorage.setItem("idsala_peliculas", id.toString());
    } catch (err) {
      Alert.alert(err);
    }
  };

  asyncstorageSave_idpelicula_titulo = async item => {
    try {
      await AsyncStorage.setItem("idpelicula_titulo", item.toString());
    } catch (err) {
      Alert.alert(err);
    }
  };

  asyncstorageSave_idhorario_hora = async item => {
    try {
      await AsyncStorage.setItem("idhorario_hora", item.toString());
    } catch (err) {
      Alert.alert(err);
    }
  };

  asyncstorageSave_idsala_nombre = async item => {
    try {
      await AsyncStorage.setItem("idsala_nombre", item.toString());
    } catch (err) {
      Alert.alert(err);
    }
  };

  asyncstorageGet = async () => {
    try {
      const idfilm = await AsyncStorage.getItem("idpelicula");
      this.setState({ idpelicula: idfilm });
      this.getData();
    } catch (e) {
      Alert.alert(e);
    }
  };

  asyncstorageClear = async () => {
    try {
      await AsyncStorage.clear();
      this.setState({ idpelicula: "" });
    } catch (e) {
      Alert.alert(e);
    }
  };

  componentDidMount() {
    this.asyncstorageGet();
    this._onRefresh();
  }

  render() {
    const { pelicula, sala_peliculas, checked } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/audience.jpg")}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.header}>DETALLE DE LA PELÍCULA</Text>
          </View>

          <ScrollView vertical={true}>
            {pelicula.map(element => (
              <Card
                key={element.id}
                title={element.titulo}
                image={require("../../assets/ticket.jpg")}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh()}
                  />
                }
              >
                <Text style={{ marginBottom: 10 }}>
                  Resumen: {element.resumen}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  Categoría: {element.categoria}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  Valor de Boleto: {element.valorBoleto}
                </Text>
              </Card>
            ))}

            <Card title="Horarios Disponibles">
              {sala_peliculas.map(element => (
                <View key={element.id}>
                  <Text>Horario: {element.idhorario_hora}</Text>
                  <Text>Sala: {element.idsala_nombre}</Text>
                  <RadioButton
                    value={element.id}
                    status={checked === element.id ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: element.id }),
                        this.asyncstorageSave_idsala_peliculas(element.id),
                        this.asyncstorageSave_idpelicula_titulo(
                          element.idpelicula_titulo
                        ),
                        this.asyncstorageSave_idhorario_hora(
                          element.idhorario_hora
                        ),
                        this.asyncstorageSave_idsala_nombre(
                          element.idsala_nombre
                        );
                    }}
                  />
                </View>
              ))}
            </Card>
          </ScrollView>
          <TouchableHighlight>
            <Link
              to="/"
              style={styles.button}
              onPress={() => this.asyncstorageClear()}
            >
              <Text>Volver</Text>
            </Link>
          </TouchableHighlight>

          <TouchableHighlight>
            <Link to="/buy_tickets" style={styles.button1}>
              <Text>Comprar</Text>
            </Link>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#008080",
    top: 20
  },
  overlayContainer: {
    flex: 1
  },
  top: {
    height: "20%",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    height: 40,
    position: "absolute",
    left: 0,
    right: 0,
    padding: 40,
    top: 0,
    backgroundColor: "rgb(0, 128, 128)",
    opacity: 0.8,
    fontSize: 20,
    zIndex: 10
  },
  button: {
    height: 50,
    position: "absolute",
    left: 0,
    alignItems: "center",
    bottom: 20,
    backgroundColor: "#008080",
    paddingHorizontal: 20,
    flexDirection: "row",
    flex: 2,
    borderRadius: 25
  },
  button1: {
    height: 50,
    position: "absolute",
    alignItems: "center",
    right: 0,
    paddingHorizontal: 20,
    bottom: 20,
    borderRadius: 25,
    backgroundColor: "#008080",
    flex: 2,
    flexDirection: "row"
  }
});
