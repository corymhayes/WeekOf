import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';
import MyContext from './MyContext';

export default class InputText extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <View>
            <Text style={styles.inputTitle}>{this.props.title}</Text>
            <TextInput style={styles.inputStyle} onChangeText={context._addEventTitle}></TextInput>
          </View>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  inputTitle: {
    fontSize: 36,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  inputStyle: {
    width: 275,
    fontSize: 16,
    marginBottom: 50,
    borderBottomWidth: 1,
    borderBottomColor: `#bdbdbd`,
    fontWeight: `bold`
  },
});
