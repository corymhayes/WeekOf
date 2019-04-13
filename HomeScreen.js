import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import MyProvider from './MyProvider';
import MyContext from './MyContext';


export default class HomeScreen extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <View style={styles.container}>
            <Text>HOME</Text>
            <Text>{context.state.eventTitle}</Text>
            <Button 
              title="NEW EVENT"
              onPress={() => this.props.navigation.navigate('Event')} 
            />
            <Button 
              title="DOW"
              onPress={() => {
                this.props.navigation.navigate('DOW', {
                  eventTitle: context.state.cards.myTitle,
                  eventTime: context.state.cards.time,
                  eventNotes: context.state.cards.notes
                })
              }} 
            />
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
