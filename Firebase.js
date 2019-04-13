import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyAVthWGSJ0SZhUrkYtlDPBm0Gtb-4yeXFY",
  authDomain: "weekly-scheduler-28498.firebaseapp.com",
  databaseURL: "https://weekly-scheduler-28498.firebaseio.com",
  projectId: "weekly-scheduler-28498",
  storageBucket: "weekly-scheduler-28498.appspot.com",
  messagingSenderId: "228220715415"
};

firebase.initializeApp(config);



export default firebase;