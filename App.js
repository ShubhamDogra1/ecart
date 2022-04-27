import React from 'react'
import Navigator from './Navigation/navigator'
import firebase from '@react-native-firebase/app';
var config = {

  databaseURL: "https://ecart-4f922-default-rtdb.firebaseio.com",
  
  projectId: 'ecart-4f922',
  
  apiKey: 'AIzaSyCDEfLwu4i_GQHB9JO30eGY_A-0wpeRNmk',
  
  appId: '1:304592517316:android:21b8bcaed015b957d57191',
  
  messagingSenderId: '',
  
  storageBucket: ''
  
  }
  
  if (!firebase.apps.length) {
  
  firebase.initializeApp(config);
  
  } else {
  
  firebase.app();
  
  }

 const App = () => {
  return (
   <Navigator>

   </Navigator>
  )
}

export default App ;