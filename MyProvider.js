import React, {Component} from 'react';
import MyContext from './MyContext';
import firebase from './Firebase';
import firestore from 'firebase/firestore';

export default class Provider extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      addEventTitle: ``,
      addEventTime: new Date(),
      addEventNotes: ``,
      cards: {},
      eventTitle: ''
    };
  }

  componentDidMount = () => {
    const getRef = firebase.firestore().doc('cards/items');
    
    getRef.get().then((doc) => {
      this.setState({
        cards: doc.data()
      })
    });
  }

  render(){
    return(
      <MyContext.Provider value={{ 
        state: this.state, 
        _addEventTitle: (text) => {
          this.setState({ addEventTitle: text });
        },
        _addEventNotes: (text) => {
          this.setState({ addEventNotes: text });
        },
        _addEventTime: (time) => {
          this.setState({ addEventTime: time })
        },
        _addEventDetails: () => {
          const time = this.state.addEventTime
          const hour = parseInt(time.toString().substr(16, 2));
          let minute = parseInt(time.toString().substr(19, 2));
          let newTime = '';
          
          if(minute === 0){
            minute = '00'
          }

          if(hour === 0){
            newTime = `${hour+12}:${minute} am` 
          } else if(hour === 12){
            newTime =`${hour}:${minute} pm`
          } else if(hour > 12 && hour <= 23){
            newTime = `${hour-12}:${minute} pm`
          } else if(hour < 10){
            newTime = `${hour}:${minute} am`
          } else {
            newTime =`${hour}:${minute} am`
          }

          let docRef = firebase.firestore().collection('cards').doc();
          docRef.set({
            myTitle: this.state.addEventTitle,
            time: newTime,
            notes: this.state.addEventNotes
          }) 
        },
        // addStuff: (textToSave) => {
        //   let docRef = firebase.firestore().doc('cards/items');
        //   docRef.set({
        //     title: textToSave
        //   })
        // },
      }}>
        { this.props.children }
      </MyContext.Provider>
    )
  }
}