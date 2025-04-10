import { StyleSheet, Text, View,Image,SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React,{ useContext } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Head from '@/Component/Home/Head';
import colors from '@/constant/colors';
import { cartcontext } from '@/cartcontext/cartcontext'; // ✅ import your context

import { useRoute } from '@react-navigation/native';
const colored=[
  '#CC6CE7',
  '#FF6F61',
  '#6B5B93',
  '#98F5F9',
  '#F7CAC9',
  '#92A8D1',
  '#060270',
  '#B9CBB8' 
];
const productdetails = () => {

  const {courseParams}=useLocalSearchParams();
  const course=JSON.parse(courseParams);
  const [selectedColor, setSelectedColor] = React.useState(null);
  
  
  return (
    <SafeAreaView style={{backgroundColor:colors.white, width: "100%",
      height: "100%",}}>
     
     <View style={styles.container}>
     <Head/>
      <View style={styles.container2}>
      <Image source={{uri:course.image}} style={{width:"100%",height:300}}/>
      </View>

      <View style={styles.Textcontainer}>
 <Text style={styles.Tittle}>{course.title}</Text>
 <Text style={styles.PriceText}>${course.price}</Text>
       </View>
       <Text style={styles.subTittle}>{course.description}</Text>
       <Text style={styles.Color1}>COLORS</Text>

<View style={styles.Colorcontainer}> 
  {
    colored.map((color)=>{
      return(
        <TouchableOpacity onPress={()=>{setSelectedColor(color)}} style={[styles.ColorBorder,
        selectedColor===color && {borderColor:color}]}>
        
        <View style={[styles.Circle,{backgroundColor:color}]} />
        </TouchableOpacity>
      )
    })
    
    
  }
</View>

<TouchableOpacity style={styles.ButtonContainer}>
  <Text  style={styles.ButtonText}>
    ADD TO CART
  </Text>
</TouchableOpacity>

</View>
    </  SafeAreaView>
  )
}

export default productdetails

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: colors.white,
    width: "90%",
    height: "100%",
  },
  container2: {
    marginBottom: 25,
    marginTop: 25,
    width:"100%",
    backgroundColor: colors.white,
    height:330,
    borderRadius: 16,
    padding: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F5F6F7",
    borderWidth: 1,
    textAlign: "left",
    },
    Tittle: {
      fontSize: 14,
      fontWeight: "medium",
      width: 143,
      height: 18,
      color: "#000",
      marginTop: 10,
    },
    subTittle: {
      fontSize: 8,
      fontWeight: "regular",
      width: 143,
      height: 10,
      color: "#A0A3AD",
      marginTop: 5,
    },
    PriceText: {
      fontSize: 17,
      fontWeight: "semibold",
      color: "#623947",
      width: 43,
      height: 20,
    },
    Textcontainer:{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign:'center',
      alignContent:'center',
    },
    Color1:{
      fontSize: 14,
      fontWeight: "semibold",
      color: "#623947",
      width: 80,
      height: 20,
      marginTop: 20,
      marginLeft: 5,
      marginBottom: 10,
      marginRight: 5,
    },
    Colorcontainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10,
      width:"100%",
    },
    Circle:{
      height: 30,
      width: 30,
      borderRadius: 20,
    },
    ColorBorder:{
      height: 40,
      width: 40,
      borderRadius: 20,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#F5F6F7",
    },

    ButtonContainer:{
      backgroundColor:colors.primary,
      height:50,
      width:"100%",
      borderRadius:16,
      justifyContent:'center',
      alignItems:'center',
      marginTop:60,
    },
    ButtonText:{
      fontSize: 14,
      fontWeight: "semibold",
      color: colors.white,
      width: 100,
      height: 20,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
})