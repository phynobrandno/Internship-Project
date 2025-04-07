import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "@/constant/colors";
export default function CartHeader() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15,
        
            
      }}
    >
      <Text
        style={{
          width: 113,
          height: 36,
          fontSize: 30,
          fontWeight: "semibold",
          color: colors.lightGray,
        }}
      >
        My Cart
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
  )
}