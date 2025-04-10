import { View, Text,StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import CartHeader from '@/Component/Home/CartHeader'
import CartCard from '@/Component/Home/CartCard'
const MyCart = () => {
  return (
    <View style={{flex:1}}>
<CartHeader isCart={true} />

<FlatList data={[1,2,3,4,5,6,]} ListHeaderComponent={
<>

</>

} renderItem={CartCard} 
ListFooterComponent={
  <>
  <View style={styles.PriceContainer}>

<View style={styles.TotalContainer}>
<Text  style={styles.TotalText}>Total</Text>
<Text style={styles.Price}>$180</Text>

</View>
<View style={styles.shippingContainer}>
<Text style={styles.shippingText}>Shipping</Text>
<Text style={styles.Price}>$50</Text>
</View>
<View style={styles.divider}/>

<View style={styles.TotalContainer}>
<Text  style={styles.TotalText}>Grand Total</Text>
<Text style={styles.Price}>$230</Text>
</View>


</View>
  </>
}
showsVerticalScrollIndicator={false}
contentContainerStyle={{paddingBottom:100}}


/>

<TouchableOpacity style={styles.Button}>
  <Text style={styles.ButtonText}>CHECKOUT</Text>
</TouchableOpacity>

     </View>
  )
}
export default MyCart
const styles = StyleSheet.create({
  PriceContainer:{
    marginTop:20,
    padding:20,
  },
  TotalContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:10,
    marginBottom:0,
  },
  shippingContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:10,
  },
  TotalText:{
    fontSize:20,
    fontWeight:"bold",
  },
  shippingText:{
    fontSize:20,
    fontWeight:"bold",
  },
  Price:{
    fontSize:18,
    fontWeight:"bold",
    color:"#114232",
  },
  divider:{
    borderBottomColor:"#114232",
    borderBottomWidth:1,
    marginHorizontal:10,
    marginTop:10,
  },
  Button:{
    backgroundColor:"#114232",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:30,
  },
  ButtonText:{
    fontSize:18,
    fontWeight:"bold",
    color:"#fff",
  },
})
