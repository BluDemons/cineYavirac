import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";

import MovieDatail from './src/components/UI/Movie_Detalle';
import BuyTickets from './src/components/UI/Comprar';
import Cartelera from './src/components/UI/Cartelera';
import LoginScreen from './src/components/UI/Login';
//import SendTickets from './src/pages/send_tickets';

export default class App extends Component {   
   render() {   
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={ LoginScreen } />
            <Route exact path="/detalle" component={ MovieDatail } />
            <Route exact path="/tickets" component={ BuyTickets } />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});