import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  AsyncStorage
} from "react-native";
import { Link } from "react-router-native";
import { Card } from "react-native-elements";
import axios from "axios";

const API = "http://192.168.43.183:5000/cine/movie";

// https://aboutreact.com/example-of-sqlite-database-in-react-native/

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
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

  asyncstorageSave = async idpelicula => {
    try {
      await AsyncStorage.setItem("idpelicula", idpelicula.toString());
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { peliculas } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/audience.jpg")}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.header}> CARTELERA </Text>
          </View>

          <ScrollView vertical={true}>
            {peliculas.map(element => (
              <Link
                to="/movie_detail"
                key={element.id}
                onPress={() => this.asyncstorageSave(element.id)}
              >
                <Card image={require("../../assets/ticket.jpg")}>
                  <Text
                    style={{
                      marginBottom: 10,
                      fontSize: 15,
                      fontWeight: "bold",
                      textAlign: "center"
                    }}
                  >
                    {element.titulo}
                  </Text>
                </Card>
              </Link>
            ))}
          </ScrollView>
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
    top: 20
  },
  overlayContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
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
    fontSize: 25,
    zIndex: 10
  },
  menuContainer: {
    height: "40%"
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  }
});
