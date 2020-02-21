import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  TextInput,
  AsyncStorage
} from "react-native";
import { Card } from "react-native-elements";
import { Link } from "react-router-native";
import axios from "axios";

const API = "http://192.168.0.112:5000/cine/";

export default class SendTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: "",
      sala: "",
      pelicula: "",
      horario: "",
      boletos: ""
    };
  }

  handleCorreo = text => {
    this.setState({ correo: text });
  };

  saveData = () => {
    this.post = {
      datos: {
        correo: this.state.correo,
        sala: this.state.sala,
        pelicula: this.state.pelicula,
        horario: this.state.horario,
        boletos: this.state.boletos
      }
    };

    if (
      this.post.datos.correo === "" ||
      this.post.datos.sala === "" ||
      this.post.datos.pelicula === "" ||
      this.post.datos.horario === "" ||
      this.post.datos.boletos === ""
    ) {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API + "send_mail", this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Correo Enviado!");
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  asyncstorageGet = async () => {
    try {
      const idpelicula_titulo = await AsyncStorage.getItem("idpelicula_titulo");
      this.setState({ pelicula: idpelicula_titulo });
      const idhorario_hora = await AsyncStorage.getItem("idhorario_hora");
      this.setState({ horario: idhorario_hora });
      const idsala_nombre = await AsyncStorage.getItem("idsala_nombre");
      this.setState({ sala: idsala_nombre });
      const numero_boletos = await AsyncStorage.getItem("numero_boletos");
      this.setState({ boletos: numero_boletos });
    } catch (e) {
      alert(e);
    }
  };

  asyncstorageClear = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      alert(e);
    }
  };

  componentDidMount() {
    this.asyncstorageGet();
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/audience.jpg")}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.header}>Enviar Boletos</Text>
          </View>

          <Card title="Dirección de Correo Electrónico">
            <TextInput
              placeholder="example@gmail.com"
              underlineColorAndroid="transparent"
              style={styles.TextInputStyle}
              keyboardType={"default"}
              onChangeText={this.handleCorreo}
            />
          </Card>
        </View>
        <TouchableHighlight>
          <Link to="/" style={styles.button1} onPress={() => this.saveData()}>
            <Text>Enviar</Text>
          </Link>
        </TouchableHighlight>
        <TouchableHighlight>
          <Link
            to="/buy_tickets"
            style={styles.button}
            onPress={() => this.asyncstorageClear()}
          >
            <Text>Volver</Text>
          </Link>
        </TouchableHighlight>
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
    backgroundColor: "red",
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
    zIndex: 10,
    alignItems: "center"
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
