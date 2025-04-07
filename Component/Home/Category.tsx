import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '@/constant/colors'

const Category = ({item, selectedCategory,setSelectedCategory}) => {
  return ( 
    <TouchableOpacity style={[styles.Category,selectedCategory===item&&{
        backgroundColor: colors.lightGray, 
        
      } ]} onPress={()=>setSelectedCategory(item)}>
      <Text style={[styles.CategoryText,selectedCategory===item&&{
        color: colors.headerColor,
        
      } ]} >{item}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    Category: {
        backgroundColor: colors.headerColor,
        borderRadius: 16,
        width: 80,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    CategoryText: {
        fontSize: 12,
        color: colors.lightGray,
        fontWeight: "medium",
        height: 20,
        width: 75,
        textAlign: "center",
        
        
    },
})