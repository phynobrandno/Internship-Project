import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from "@expo/vector-icons/EvilIcons";
const imagrurl="https://images-na.ssl-images-amazon.com/images/I/71SUe9nkS5L.jpg"
const cartCard = () => {
  return (
    <View style={styles.cartCard}>
<View style={styles.cartCardContent}>
<Image source={{uri:imagrurl}} style={styles.CoverImage}/>
<View style={{marginLeft:10}}>
  <Text style={{fontSize:18,fontWeight:"bold"}}>Product Name</Text>
  <Text style={{fontSize:16}}>$1500</Text>
  <View style={styles.circle}>

  </View>
  </View>
  </View>
  <TouchableOpacity >
    <EvilIcons name="trash" size={30} color="#114232" />
  </TouchableOpacity >
  
      </View>
  )
}

export default cartCard

const styles = StyleSheet.create({
  cartCard: {
  marginVertical: 10,
  margin: 10,
  flexDirection: "row",
  justifyContent: "space-between",
  },
  CoverImage: {
    width: "55%",
    height: 125,
    borderRadius: 10,
  },
  cartCardContent:{
flexDirection:"row",
width:"70%",
  },
  circle:{
    height:32,
    width:32,
    borderRadius:16,
    backgroundColor:"#114232",
  }
})