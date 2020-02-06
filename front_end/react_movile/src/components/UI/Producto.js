import React, {Component} from 'react'
import { StyleSheet, View, ScrollView, Button,Text,TextInput,TouchableHighlight, ImageBackground, Image } from 'react-native'
import { Table, Row } from 'react-native-table-component'

const image = 'https://img.freepik.com/psd-gratis/superposicion-sombra-sobre-fondo-textura-madera-blanca_1048-10825.jpg?size=626&ext=jpg'
const API_URL = "http://192.168.1.7:3000/api/menu";  //CAMBIAR DEPENDIENDO IP DE SU MAQUINA

export default class Producto extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nombre: '',
        descripcion: '',
        precio: '',
        filePath: {},
      }
    }

    changeNombre = (nombre) => {
      this.setState({nombre})
    }
    changeDescripcion = (descripcion) => {
      this.setState({descripcion})
    }
    changePrecio = (precio) => {
      this.setState({precio})
    }

    saveData = e => {
      if (this.state.nombre === "" || this.state.descripcion === "" || this.state.precio === "") {
        alert("Complete todos los datos para continuar...");
      } else {
        axios.post(API_URL, this.state)
        .then(response => {
          alert("Agregado Exitosamente");
        })
        .catch(error => {
          alert("Ups!! ...")
        })
      }
    }

    render() { 
      return (
        <ImageBackground source={{uri: image}} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
                <Text>Producto:</Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Escribe aquí el producto"
                  value={ this.state.nombre }
                  onChangeText={ (e) => this.changeNombre(e) }
                />
                <Text>Descripción:</Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Escribe aquí la descripción"
                  value={ this.state.descripcion }
                  onChangeText={ (e) => this.changeDescripcion(e) }
                />
                <Text>Precio:</Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Escribe aquí el precio"
                  value={ this.state.precio }
                  onChangeText={ (e) => this.changePrecio(e) }
                />
            </View>
        </ImageBackground>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1,alignItems:'center', paddingTop: 100},
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
  });