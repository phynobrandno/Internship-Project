import { ScrollView,View,Text,TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '@/constant/colors';

export default function ScrollBar() {
  return (
    
    <ScrollView>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
      marginRight: 20, marginLeft: 20, marginBottom: 20,  padding: 10, 
    }}>
      <TouchableOpacity style={{
        backgroundColor: colors.lightGray,
        borderRadius: 16,
        padding: 10,
        marginRight: 10,
        height:34,
        width: 59,
      }}>
        
        <Text style={{
            width: 39,
            height: 14,
            fontSize: 12,
            fontWeight:'medium',
            color: colors.white,
        }}>Mouse</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{
        backgroundColor: colors.headerColor,
        borderRadius: 16,
        padding: 10,
        marginRight: 10,
        height:34,
        width: 70,
      }} >
        <Text style={{
            width: 50,
            height: 14,
            fontSize: 12,
            fontWeight:'medium',
            color: colors.lightGray,
        }}>Headset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: colors.headerColor,
        borderRadius: 16,
        padding: 10,
        marginRight: 10,
        height:34,
        width: 90,
      }}>
        <Text style={{
            width: 70,
            height: 14,
            fontSize: 12,
            fontWeight:'medium',
            color: colors.lightGray,
        }}>Smartwatch</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: colors.headerColor,
        borderRadius: 16,
        padding: 10,
        marginRight: 10,
        height:34,
        width: 77,
      }}>
        <Text style={{
            width: 57,
            height: 14,
            fontSize: 12,
            fontWeight:'medium',
            color: colors.lightGray,
        }}>Keyboard</Text>
      </TouchableOpacity>
      
      
    </ScrollView>
  </ScrollView>
  )
}