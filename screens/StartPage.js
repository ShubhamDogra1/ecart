import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ActivityIndicator, StatusBar, Modal, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
//import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import { TextInput, Button, HelperText } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import AnimatedLoader from "react-native-animated-loader";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const StartPage = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [signUp, setSignUp] = useState(false);
  const [gData, setGdata] = useState();


useEffect(()=>{
  GoogleSignin.configure({
    webClientId: "304592517316-i2vfv7hpkdp9v6fig1otgpeg4m4hqj4k.apps.googleusercontent.com",
    offlineAccess: false,
  });
},[])
 


//   async function onGoogleButtonPress() {
//     // Get the users ID token
//     const { idToken } = await GoogleSignin.signIn();

     
//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// console.log(googleCredential)
//     // Sign-in the user with the credential
//     //return 
//     const data = auth().signInWithCredential(googleCredential);
//    data.then((user)=>{
//      console.log(user)
//    })
//    .catch((error)=>{
//      console.log(error)
//    })
//   }

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo: userInfo, loggedIn: true });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};




  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setGdata(userInfo)
      console.log(userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({ isLoginScreenPresented: !isSignedIn });
  };

  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({ currentUser });
  };



  const playServices = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // google services are available
    } catch (err) {
      console.error('play services are not available');
    }
  }


  const signout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigation.navigate('SecondScreen')
    setEmail('')
    setPassword('')
    alert('signout sucessful')
  }
  const signup = () => {
    if (email === '' && Password === '') {
      alert("please enter email and password to signup")

    }
    else {
      auth()
        .createUserWithEmailAndPassword(email.trim(), Password)
        .then(userCredentials => {
          const users = userCredentials.user
          navigation.navigate('SecondScreen')
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!', user.email);
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  }

  const login = () => {
    if (email === '' && Password === "") {
      alert('Please Enter Email & Password to Enter ')
    }
    else {
      auth()
        .createUserWithEmailAndPassword(email, Password)
        .then(() => {
        //  console.log(user.email)
          console.log('User account created & signed in!');
          navigation.navigate('HomePage')
          setVisible(true)
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  }


  return (

    <SafeAreaView>
     
      <StatusBar
        animated={true}
        backgroundColor="#61dafb">

      </StatusBar>
      {/* <Modal isVisible={signUp}
      style={{
        width:"40%"
        ,height:"40%",
        borderWidth:2,
        backgroundColor:'gray'
      }}
      >
      </Modal> */}



<AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={styles.lottie}
      speed={1}>
      <Text>Doing something...</Text>
    </AnimatedLoader>
      <View style={{
        flex: 1,

      }}>

        <View
          style={{
            width: 100,
            height: 100,
            marginTop: 10,
            alignSelf: 'center'
          }}>
          <Animatable.Image
            animation='fadeInLeftBig'
            easing='ease-in-out-back'
            style={{
              width: '100%',
              height: "100%",
              resizeMode: 'contain'
            }}
            source={require('../src/assests/shopping-cart.png')}>
          </Animatable.Image>
        </View>
        <Animatable.View
          animation='bounce'
          style={{
            width: '96%',
            height: 300,
            marginTop: 10,
            borderRadius: 20,
            marginTop: 10, alignSelf: 'center',
            backgroundColor: 'white',

            elevation: 20
          }}>
          <View
            style={{
              width: '90%',
              height: 30,
              alignSelf: 'center',

            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'blue',
                textAlign: 'center',
                fontFamily: 'sans-serif-condensed'
              }}
            >
              Let's Sign You In
            </Text>
          </View>
          <View style={{
            width: '100%',
            height: '30%',
            borderColor: 'red',


          }}>
            <TextInput

              label="Email"
              placeholder="Enter your Email Here"
              value={email}
              onChangeText={text => setEmail(text)}
            />

          </View>
          <View style={{
            width: '100%',
            height: '30%',
            marginTop: 23

          }}>
            <TextInput
              label="Password"
              value={Password}
              secureTextEntry
              onChangeText={text => setPassword(text)}

            />

          </View>
          <View
            style={{
              width: '100%',
              height: 40,

            }}>
            <Button
              style={{
                height: '90%',
                width: '90%',
                alignSelf: 'center'
              }}

              mode="contained" onPress={login}>
              Login
            </Button>
          </View>


        </Animatable.View>
        <View
          style={{
            width: "60%",
            height: 50,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            elevation: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <TouchableOpacity onPress={signup}>
            <Text
              style={{
                color: 'blue',
                textAlign: 'center',
                fontSize: 16
              }}>Don't have Account?</Text>
            < Text
              style={{
                color: 'blue',
                textAlign: 'center',
                fontSize: 16
              }}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width: '80%'
          , height: 100,
          borderRadius: 20,
          marginTop: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          elevation: 10,
          backgroundColor: 'white'
        }}>
          <View
            style={{
              width: '30%',
              height: "70%",
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
              <Image
                style={{
                  width: '90%',
                  height: '90%',
                  resizeMode: 'contain'
                }}
                source={require('../src/assests/facebook.png')}
              ></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '30%',
              height: "70%",

            }}>

            <TouchableOpacity
              onPress={()=>signIn()
              }>
              <Image
                style={{
                  width: '90%',
                  height: '90%',
                  resizeMode: 'contain'
                }}
                source={require('../src/assests/gmail.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          width: 100,
          height: 40,
          marginTop: 30,
          alignSelf: 'center',
        }}>
          <TouchableOpacity
            onPress={()=>navigation.navigate('HomePage')}
          >
            <Animatable.Image
              animation='jello'
              easing='ease-in-out'
              iterationCount='infinite'
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain'
              }}
              source={require('../src/assests/right-arrow.png')}
            >
            </Animatable.Image>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

export default StartPage;