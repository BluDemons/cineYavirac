import React,{Component} from 'react';
import { Text,TextInput,View,Button, Image,ImageBackground, StyleSheet, Form } from 'react-native';

//import { Router, Scene } from 'react-native-router-flux'
import axios from 'axios';

const imgbg = require('../../assets/hamburger-895831_1280.jpg');

const API_URL = "http://192.168.1.7:3000/api/login";  //CAMBIAR DEPENDIENDO IP DE SU MAQUINA

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  state = {
    nombre:'',
    correo:''
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginAccess = e => {
    e.preventDefault()
    if (this.state.correo === "" || this.state.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API_URL, this.state)
      .then(response => {
        if ( response.data.mensaje === "found" ) {
          alert("entrar")
          // window.location.assign("http://localhost:3000/home");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  static navigationOptions ={
    header: null,
    error:null,
    title: 'Bienvenidos',
    sending:false
  }

  render() {
    return (
        <ImageBackground source={{imgbg}} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
            <Form onSubmit={ this.loginAccess }>
              <View style={styles.containerUserName}>
                {/* <Icon type="font-awesome" name="user" color="gray" containerStyle={styles.icon}/> */}
                <TextInput placeholder="Nombre" placeholderTextColor="gray"
                style={styles.textInput}
                type="text"
                name="nombre"
                value={ this.state.nombre }
                onChange={ this.changeHandler } 
                /> 
              </View>
              <View style={styles.separator1}/>
              <View style={styles.containerPassword}>
                {/* <Icon type="entypo" name="key" color="gray" containerStyle={styles.icon}/> */}
                <TextInput placeholder="Email" placeholderTextColor="gray"
                style={styles.textInput} secureTextEntry={true}
                type="text"
                name="correo"
                value={ this.state.correo }
                onChange={ this.changeHandler } 
                /> 
              </View>
              <View style={styles.separator1}/>
              <View style={styles.containerSignIn}>
                <Button type="submit" title='Ingresar' backgroundColor='#ffa100'/>
              </View>   
            </Form>         
          </View>        
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'stretch',
  },
  containerSignIn:{
    height: 60,
    marginLeft:'10%',
    marginRight:'10%',
    paddingTop:'2%'
  },
  containerUserName:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    marginLeft:'10%',
    marginRight:'10%',
  },
  containerPassword:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    marginLeft:'10%',
    marginRight:'10%',
  },
  containerRegister:{
    height: 60,
    marginLeft:'6%',
    marginRight:'6%',
    alignItems: 'center',
  },
  icon:{
    flex:1
  },
  textInput:{
    backgroundColor:'transparent',
    flex:1,
    color:'black',
    paddingLeft:'25%',
    opacity: 0.8,
  },
  separator1: {
    marginVertical: 10,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})