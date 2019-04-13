import React, {Component} from 'react';
import { Button, StyleSheet, View, } from 'react-native';
import MyProvider from './MyProvider';
import MyContext from './MyContext';

export default class PickDate extends Component {

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <View style={styles.container}>
            <Button title={this.props.title} color={`#fff`} onPress={context._addEventDetails}></Button>
          </View>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 275,
    height: 45,
    backgroundColor: `#000`,
    paddingTop: 3,
  },
});
