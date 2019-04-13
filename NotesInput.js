import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';
import MyContext from './MyContext';

export default class NotesInput extends Component {
  render() {
    return (
      <MyContext.Consumer>
      {context => (
        <View>
          <Text style={styles.inputTitle}>{this.props.title}</Text>
          <TextInput style={styles.inputStyle} onChangeText={context._addEventNotes} multiline={true}></TextInput>
        </View>
      )}
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  inputTitle: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  inputStyle: {
    width: 275,
    fontSize: 14,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: `#bdbdbd`,
    height: 100,
  },
});
