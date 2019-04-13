import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export default class ColorPicker extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.colorDotCyan}></View>
        <View style={styles.colorDotGreen}></View>
        <View style={styles.colorDotMagenta}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  colorDotCyan:{
    width: 20,
    height: 20,
    backgroundColor: '#01E2F8',
    borderRadius: 10,
  },
  colorDotGreen:{
    width: 20,
    height: 20,
    backgroundColor: '#BDF93E',
    borderRadius: 10,
  },
  colorDotMagenta:{
    width: 20,
    height: 20,
    backgroundColor: '#FB1650',
    borderRadius: 10,
  }
});
