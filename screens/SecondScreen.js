import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
const SecondScreen = ({navigation}) => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <View
          style={{
            width: '50%',
            height: 300,
            alignSelf: 'center',
            fontSize: 30,
            alignItems: 'center',
            marginTop: 200
          }}>
          <Animatable.Text
            animation='zoomInUp'
            iterationCount={1}
            easing='ease-in-out-expo'
          >
            SecondScreen
          </Animatable.Text>
        </View>
        </View>
    )
}
export default SecondScreen;
