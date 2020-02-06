import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
//import Routes from './routes';
import Login from './src/components/UI/Login';
import Home from './src/components/UI/Home';

class reactTutorialApp extends Component {
   render() {
      return (
         <Home />
      )
   }
}
export default reactTutorialApp
//AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)