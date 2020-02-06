import React from 'react'
//import { TouchableOpacity, Text, View, Button } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Pedidos from './Pedidos';
import Menu from './Menu';
import Producto from './Producto'

class MenuScreen extends React.Component {
  render() {
    return (
      <Menu />
    );
  }
}

class PedidoScreen extends React.Component {
  render() {
    return (
      <Pedidos/>
    );
  }
}

class ProductoScreen extends React.Component{
  render(){
    return(
      <Producto/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Producto: { screen: ProductoScreen},
  Menu: { screen: MenuScreen },
  Pedidos: { screen: PedidoScreen },
});

export default createAppContainer(TabNavigator);
