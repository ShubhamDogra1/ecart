import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity , Dimensions} from 'react-native'
import * as Animatable from 'react-native-animatable';
import { TextInput, Button, HelperText, TouchableRipple } from 'react-native-paper';
const SignupScreen = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height
    return (

        <View style={{
            flex: 1,

        }}>
            <View
                style={{
                    Width: "100%",
                    height: 150,


                }}>
                <ImageBackground
                    style={{
                        resizeMode: 'contain',
                        Width: "100%",
                        height: '100%'
                    }}
                    source={require('../src/assests/file.png')}
                >
                </ImageBackground>

            </View>
            <View
                style={{
                    Width: "100%",
                    height: 900,
                    backgroundColor: 'white',
                    elevation: 20

                }}>
                <Animatable.Text
                    animation='pulse'
                    iterationCount='infinite'
                    style={{
                        fontSize: 50,
                        textAlign: 'center',
                        color: 'black',
                        fontWeight: 'bold'
                    }}
                >
                    Create Account
                </Animatable.Text>
                <Text style={{
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>Enter Email and Password to Register</Text>
                <View

                    style={
                        {
                            width: "90%",
                            height: 100,
                            alignSelf: 'center'
                        }
                    }>
                    <TextInput

                        label="Email"
                        placeholder="Enter your Email Here"

                    //onChangeText={text => setEmail(text)}
                    />
                </View>
                <View
                    style={
                        {
                            width: "90%",
                            height: 100,
                            alignSelf: 'center'
                        }
                    }>
                    <TextInput
                        label="Password"
                        secureTextEntry
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <View
                    style={{
                        width: "90%",
                        height: "10%",
                        alignSelf: "center",
                        backgroundColor: 'white',
                        justifyContent: 'center'
                    }}>
                    <TouchableOpacity
                        style={{
                            width: "60%",
                            height: '40%',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'blue'
                            , borderRadius: 20
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


export default SignupScreen;