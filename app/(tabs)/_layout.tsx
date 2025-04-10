import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Zocial from '@expo/vector-icons/Zocial';
import { CartContextProvider } from '@/cartcontext/cartcontext';
import { useNavigation } from 'expo-router';
import { cartcontext } from '@/cartcontext/cartcontext'; 

import { useContext } from 'react';
export default function _layout() {
   
  return (
    <CartContextProvider>

    <Tabs screenOptions={{
        headerShown:false
    }} >
        
        <Tabs.Screen name='Home' 
        options={{
            tabBarIcon:({color,size})=> <Feather name="home" size={24} color="black" />
        }}
    
        />
        <Tabs.Screen name='Order' 
        options={{
            tabBarIcon:({color,size})=> <FontAwesome5 name="first-order" size={24} color="black" />
        }}
        />
        <Tabs.Screen name='MyCart'
        
        options={{
            
            tabBarIcon:({color,size})=> <Zocial name="cart" size={24} color="black" />
           
        }}
        />
        <Tabs.Screen name='Profile'
        options={{
            tabBarIcon:({color,size})=> <AntDesign name="profile" size={24} color="black" />
        }}
        />



    </Tabs>
    </CartContextProvider>
  )
}