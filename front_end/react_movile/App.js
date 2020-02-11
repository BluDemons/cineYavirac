import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
//import Routes from './routes';
import Login from './src/components/UI/Login';
import Route from './routes';

class reactTutorialApp extends Component {
   render() {
      return (
         <Route />
      )
   }
}
export default reactTutorialApp
//AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)