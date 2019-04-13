import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import MyProvider from './MyProvider';
import MyContext from './MyContext';
import InputText from './InputText';
import PickDate from './PickDate';
import NotesInput from './NotesInput';
import SubmitButton from './SubmitButton';


export default class AddEvent extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <View style={styles.container}>
            <InputText title="Title"></InputText>
            <PickDate title="Time"></PickDate>
            <NotesInput title="Notes"></NotesInput>
            <SubmitButton title="Submit" style={styles.submitButton} color={`#000`} onPress={() => {this.props.navigation.navigator('Home')}}></SubmitButton>
          </View>
        )}
      </MyContext.Consumer>
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
