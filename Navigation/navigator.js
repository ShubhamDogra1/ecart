
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from '../screens/StartPage'
import SecondScreen from '../screens/SecondScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Homepage  from '../screens/HomePage';
import OnboardScreen from '../screens/OnboardScreen';
const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="OnBoardScreen" component={OnboardScreen} 
                options={{
                    title:'Welcome',
                    headerStyle: {
                        backgroundColor: 'black',
                      },
                      headerTintColor: 'white',
                      headerTitleStyle: {
                        fontWeight: 'bold'
                }}}
                />
                <Stack.Screen name='StartPage' component={StartPage}
                 options={{
                    title:'ScreenOne',
                    headerStyle: {
                        backgroundColor: '#0FE7DC',
                      },
                    
                      headerTintColor: '#3B4B4A',
                      headerTitleStyle: {
                        fontWeight: 'bold'
                        
                }}} />
                <Stack.Screen name='SecondScreen' component={SecondScreen}
                 options={{
                    title:'ScreenOne',
                    headerStyle: {
                        backgroundColor: '#0FE7DC',
                      },
                    
                      headerTintColor: '#3B4B4A',
                      headerTitleStyle: {
                        fontWeight: 'bold'
                        
                }}} />
                <Stack.Screen name='SignUpScreen' component={SignUpScreen}
                 options={{
                    title:'Create Account',
                    headerStyle: {
                        backgroundColor: '#0FE7DC',
                      },
                      headerTintColor: '#3B4B4A',
                      headerTitleStyle: {
                        fontWeight: 'bold'
                }}} />
                 <Stack.Screen name='HomePage' component={Homepage}
                 options={{
                    title:'HomeScreen',
                    headerStyle: {
                        backgroundColor: '#0FE7DC',
                      },
                      headerTintColor: '#3B4B4A',
                      headerTitleStyle: {
                        fontWeight: 'bold'
                }}} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

