import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert,TouchableHighlight } from 'react-native';
import {Link} from 'react-router-native';
import { useForm, Controller } from 'react-hook-form';

export default class BuyTickets extends Component{
  render(){
    const { register, setValue, control, handleSubmit } = useForm({defaultValues: {
      test: [{ name: "test1" }, { name: "test2" }, { name: "test3" }]
    }});
  const onSubmit = data => {
    console.log(data);
  };

  const onChange = args => {
    return {
      value: args[0].nativeEvent.text,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cantidad de Boletos</Text>
      <Controller
        as={<TextInput style={styles.input} />}
        onChange={onChange}        
        control={control}
        name="firstName"
      />
      <Text style={styles.label}>Last name</Text>
      <TextInput style={styles.input} 
        name="lastName"
        control={control}
        onChange={onChange}
      />

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View style={styles.button1}>
            <TouchableHighlight>
              <Link to="/detalle">
                <Text style={styles.button1}>Volver</Text>
              </Link>
            </TouchableHighlight>
          </View>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    backgroundColor:"#000"
  },
  button1: {
    color: "#fff",
    borderRadius: 100,
    fontWeight: "bold",
    textAlign:"center",
    flexDirection:"row",
    fontSize:20,
    justifyContent:"space-between"
  },
  label: {
    width:100,
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  input: {
    backgroundColor: 'white',
    borderColor: "transparent",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});