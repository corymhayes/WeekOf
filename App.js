import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import MyProvider from './MyProvider';
import MyContext from './MyContext';
import { createAppContainer } from "react-navigation";
import RootStack from './RootStack';

const AppContainer = createAppContainer(RootStack)

export default class App extends Component {
  render() {
    return (
      <MyProvider>
        <AppContainer />
      </MyProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 75,
    paddingLeft: 50,
    backgroundColor: '#fff',
  },
});
