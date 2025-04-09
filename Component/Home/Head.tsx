import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "@/constant/colors";
import { useNavigation } from "@react-navigation/native";
export default function Head({isCart}) {
    const navigation = useNavigation();
  
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        marginTop:15
        
            
      }}
    >
       <TouchableOpacity onPress={() => navigation.goBack()}>
      {
      isCart?( <Ionicons name={"chevron-back" }color={colors.lightGray} size={24}/>):(
<Ionicons name={"chevron-back" }color={colors.lightGray} size={24}/>
      )
    }
    </TouchableOpacity >
      <Text
        style={{
          width: 88,
          height: 36,
          fontSize: 30,
          fontWeight: "semibold",
          color: colors.lightGray,
        }}
      >
        Home
      </Text>
      <View
        style={{
          width: 120,
          height: 50,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 16,
            backgroundColor: colors.headerColor,
            width: 50,
            height: 50,
            alignItems:'center',
            justifyContent:'center'
          }}
        >
            
          <EvilIcons name="search" size={30} color="#114232"
          style={{
            width: 30,
            height: 30,
            opacity:100
          }} />
        </TouchableOpacity>
        <TouchableOpacity 
        style={{
            borderRadius: 16,
            backgroundColor: colors.headerColor,
            width: 50,
            height: 50,
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Ionicons name="notifications-outline" size={24} color="#114232"
          style={{
            width: 30,
            height: 30,
            opacity:100,
          }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
