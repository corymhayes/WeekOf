import React, {Component} from 'react';
import { StyleSheet, Text, DatePickerIOS, View, } from 'react-native';
import MyProvider from './MyProvider';
import MyContext from './MyContext';

export default class PickDate extends Component {
  constructor(){
    super()
    this.state = {
      currentTime: new Date()
    }
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <View>
            <Text style={styles.inputTitle}>{this.props.title}</Text>
            <View style={styles.blockerL}></View>
            <DatePickerIOS 
              style={styles.inputStyle} 
              date={context.state.addEventTime}
              onDateChange={context._addEventTime}
              minuteInterval={30} 
              mode={`datetime`} 
            />
            <View style={styles.blockerR}></View>
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
  blockerL: {
    height: 200,
    width: 125,
    position: `absolute`,
    backgroundColor: `#fff`,
    zIndex: 100,
    top: 40,
    left: -80,
  },
  inputStyle: {
    width: 475,
    right: 175,
  },
  blockerR: {
    height: 200,
    width: 125,
    position: `absolute`,
    backgroundColor: `#fff`,
    zIndex: 100,
    top: 40,
    left: 225,
  },
});
