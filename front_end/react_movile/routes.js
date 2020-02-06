import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Menu from './src/components/UI/Home'
import Pedido from './src/components/UI/Pedidos'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "menu" component = {Menu} title = "Menu" initial = {true} />
         <Scene key = "pedido" component = {Pedido} title = "Pedido" />
      </Scene>
   </Router>
)
export default Routes