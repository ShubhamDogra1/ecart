import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import axios from 'axios'
import * as Animatable from 'react-native-animatable';
const Homepage = () => {
  const [store, setStore] = useState([])
  useEffect(() => {
    data()
  }, [])

  const data = async () => {
    let storeData = await axios.get('https://fakestoreapi.com/products')
    console.log("heyyyy", storeData)
    const arr = [];
    arr.push(storeData)
    setStore(arr)

  }

  return (

    <View style={styles.main}>
     
        {

          store ?
            <View style={{  borderWidth:1, flex:1}}>
              <FlatList
                numColumns={2}
                horizontal={false} 
                data={store}
                keyExtractor={index => index.toString()}
                renderItem={(ele) => {
                  return ele.item.data.map((item) => (
                    <View style={{
                      width: "46%",
                      height: 350,
                      alignSelf: 'center',
                      marginTop: 10,
                      backgroundColor: 'white',
                      elevation: 10,
                      borderRadius: 10
                    }}>
                      <View style={{
                        width: "90%",
                        height: '40%',
                        alignSelf: 'center'
                      }}>
                        <Image
                          source={{ uri: item.image }}
                          style={{
                            width: "90%",
                            height: "100%",
                            resizeMode: "center",
                            alignSelf: 'center',
                            marginTop: 4
                          }}
                        ></Image>
                      </View>
                      <View
                        style={{
                          width: "90%",
                          height: "15%",
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Animatable.Text animation='zoomIn' style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>{item.title}</Animatable.Text>
                      </View>
                      <View
                        style={{
                          width: "90%",
                          height: "10%",
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Animatable.Text animation='zoomIn' style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>Price : {item.price} $</Animatable.Text>
                      </View>
                      <ScrollView
                        style={{
                          width: "90%",
                          height: "10%",
                          alignSelf: 'center'
                        }}
                      >
                        <Animatable.Text animation='zoomIn' style={{ fontSize: 9, color: 'black', textAlign: 'center' }}>Price : {item.description} $</Animatable.Text>
                      </ScrollView>
                      <View
                        style={{
                          width: "90%",
                          height: "10%",
                          alignSelf: 'center'
                        }}
                      >
                        <TouchableOpacity style={{
                          width: "90%",
                          height: "100%",
                          alignSelf: 'center',
                          backgroundColor: 'red',
                          borderRadius: 90,
                          justifyContent: 'center'

                        }}>
                          <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }} t>Add to Cart</Text>
                        </TouchableOpacity>
                      </View>
                      {/* <Text>{item.description}</Text> */}
                      {/* <TouchableOpacity style={
                       {
                         width:100,
                         height:30,borderWidth:1,
                         backgroundColor:'red',borderRadius:10,
                         elevation:10, marginTop:30,
                         alignSelf:'center'
                       }
                     }></TouchableOpacity> */}
                    </View>
                  ))

                }}
                
              />
            </View>
            : <Text>No Data Found</Text>



        }

      </View>
    
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10
  },
  Homepage: {
    flex: 1
  }
})

export default Homepage;