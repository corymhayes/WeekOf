import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import ColorPicker from './components/ColorPicker';
import MyContext from './MyContext';

export default class DayOfWeek extends React.Component {
  constructor(props){
    super(props)
    this.state={
      colorPickerOpen: false
    }

    this._pickColor=this._pickColor.bind(this);
  }

  _pickColor(){
    this.setState(state => ({
      colorPickerOpen: !state.colorPickerOpen
    }));
  }

  render() {
    const { navigation } = this.props;
    const eventTitle = navigation.getParam('eventTitle', 'NO TITLE');
    const eventTime = navigation.getParam('eventTime', 'NO TITLE');
    const eventNotes = navigation.getParam('eventNotes', 'NO TITLE');

    return (
      <MyContext.Consumer>
        {context => (
          <View style={styles.calendarDate}>
            <Text style={styles.day}>Mon</Text>
            <View style={styles.dayIndicator}>
              <TouchableHighlight onPress={this._pickColor} underlayColor="#fff">
                {
                  this.state.colorPickerOpen ?
                  <ColorPicker />
                  :
                  <View style={styles.dayColor}></View>
                }
              </TouchableHighlight>
              {
                !this.props.lastDayOfWeek ?
                  <View style={styles.dayIndicatorLine}></View>
                :
                  <></>
              }
            </View>
            <View style={styles.dayText}>
              <Text style={styles.dayTitle}>{eventTitle}</Text>
              <View style={styles.dayDetail}>
                <Text>{eventTime}</Text>
                <Text>{eventNotes}</Text>
              </View>
            </View>
          </View>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  calendarDate: {
    flex: 0,
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 50,
  },
  day:{
    fontSize: 12,
    color: 'rgba(0,0,0,.5)',
    marginRight: 30,
    textAlign: 'right',
    width: 30,
  },
  dayIndicator:{
    flex: 0,
    alignItems: 'center',
    marginRight: 35,
  },
  dayColor:{
    height: 20,
    width: 20,
    backgroundColor: '#01E2F8',
    borderRadius: 50,
    marginBottom: 5,
  },
  dayIndicatorLine:{
    height: 50,
    width: 1,
    backgroundColor: '#979797',
  },
  dayText:{
    flex: 6,
    alignItems: 'flex-start',
    flexBasis: 60,
    marginTop: -5,
  },
  dayTitle:{
    fontWeight: '700',
    fontSize: 20,
    color: 'rgb(0,0,0)',
  },
  dayDetail:{
    fontSize: 14,
    color: 'rgba(0,0,0,.5)',
  }
});
