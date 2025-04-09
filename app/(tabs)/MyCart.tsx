import { View, Text } from 'react-native'
import React from 'react'
import CartHeader from '@/Component/Home/CartHeader'
import CartCard from '@/Component/Home/CartCard'
export default function MyCart() {
  return (
    <View>
<CartHeader isCart={true} />
<CartCard/>
    </View>
  )
}