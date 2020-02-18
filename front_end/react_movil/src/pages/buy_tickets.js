import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
  TextInput,
  AsyncStorage,
  Alert
} from "react-native";
import { Card } from "react-native-elements";
import { Link } from "react-router-native";
import axios from "axios";

const API = "http://172.16.11.206:5000/cine/";

export default class BuyTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: [],
      idpelicula: "",
      idsala_peliculas: "",
      numero_boletos: ""
    };
  }

  handleNumeroBoletos = text => {
    this.setState({ numero_boletos: text });
  };

  getData = () => {
    axios
      .get(`${API}movie?id=${this.state.idpelicula}`)
      .then(response => {
        this.setState({ pelicula: response.data.datos });
      })
      .catch(error => {
        Alert.alert(error);
      });
  };

  saveData = () => {
    this.post = {
      datos: {
        idsala_peliculas: this.state.idsala_peliculas,
        numero_boletos: this.state.numero_boletos
      }
    };

    if (
      this.post.datos.idsala_peliculas === "" ||
      this.post.datos.numero_boletos === ""
    ) {
      Alert.alert("Complete todos los datos para continuar...");
    } else {
      axios
        .post(API + "compra", this.post)
        .then(response => {
          if (response.data.ok === true) {
            Alert.alert(
              "Compra exito, por favor ingrese su correo electrónico para enviar su comprobante"
            );
          }
        })
        .catch(error => {
          Alert.alert(error);
        });
    }
  };

  asyncstorageGet = async () => {
    try {
      const idmovie = await AsyncStorage.getItem("idpelicula");
      this.setState({ idpelicula: idmovie });
      const idsala_movie = await AsyncStorage.getItem("idsala_peliculas");
      this.setState({ idsala_peliculas: idsala_movie });
      this.getData();
    } catch (e) {
      Alert.alert(e);
    }
  };

  asyncstorageSave = async item => {
    try {
      await AsyncStorage.setItem("numero_boletos", item.toString());
    } catch (err) {
      Alert.alert(err);
    }
  };

  asyncstorageClear = async () => {
    try {
      await AsyncStorage.clear();
      this.setState({ idpelicula: "", idsala_peliculas: "" });
    } catch (e) {
      Alert.alert(e);
    }
  };

  componentDidMount() {
    this.asyncstorageGet();
  }

  render() {
    const { pelicula } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/audience.jpg")}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.header}>COMPRAR</Text>
          </View>

          <ScrollView vertical={true}>
            <Card title="Número de boletos">
              <TextInput
                placeholder="Ingrese el número de boletos que desea"
                underlineColorAndroid="transparent"
                style={styles.TextInputStyle}
                keyboardType={"numeric"}
                onChangeText={this.handleNumeroBoletos}
              />
            </Card>
            {pelicula.map(element => (
              <Card
                key={element.id}
                title={element.titulo}
                image={require("../../assets/login.jpg")}
              >
                <Text style={{ marginBottom: 10 }}>
                  Resumen: {element.resumen}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  Categoría: {element.categoria}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  Valor de Boleto: $ {element.valorBoleto}
                </Text>
              </Card>
            ))}
            {/* <TouchableHighlight>
              <Link to="/" style={ styles.button } onPress={ () => this.asyncstorageClear() }>
                <Text>Cartelera</Text>
              </Link>
            </TouchableHighlight> */}
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
            <Link
              to="/send_tickets"
              style={styles.button1}
              onPress={() => {
                this.asyncstorageSave(this.state.numero_boletos),
                  this.saveData();
              }}
            >
              <Text>Confirmar</Text>
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
