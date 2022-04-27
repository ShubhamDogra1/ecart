import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable';
const OnboardScreen = ({navigation}) => {
   const Width = Dimensions.get('window').width;
    const Height = Dimensions.get('window').height;
    return (
        <View
            style={styles.mainView}
        >
            <View
                style={styles.BackgroudImage}>
                <ImageBackground
                style={styles.image}
                    source={require('../src/assests/background.png')}
                >
                    <View
                    style={styles.getStartedView}>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('StartPage')}
                     style={styles.touchable}>
                        <Animatable.Text 
                        animation='wobble'
                        
                        iterationCount='infinite'
                        style={{
                            color:'white',
                            fontSize:20,
                            textAlign:'center',
                            
                        }}>
                            Get Started
                        </Animatable.Text>
                     
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
       
                
            </View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor:'black'
    },
    BackgroudImage:{
   width:"100%",
   height:"100%",
  
    },
    image:{
        width:"100%",
        height:'100%',
        resizeMode:'contain'
    },
    getStartedView:{
        width:'90%',
        height:'8%',
        borderWidth:3,
       // borderColor:'white',
        position:'absolute',
        bottom:10,
        alignSelf:'center'
        
    },
    touchable:{
        width:'100%',
        height:"100%",
        backgroundColor:'black'
    }

})
export default OnboardScreen;
