import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { cartcontext } from '@/cartcontext/cartcontext';

const CartCard = ({ item }) => {
  const { removeFromCart } = useContext(cartcontext);

  return (
    <View style={styles.cartCard}>
      <View style={styles.cartCardContent}>
        <Image source={{ uri: item.image }} style={styles.CoverImage} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 16 }}>${item.price}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <EvilIcons name="trash" size={30} color="#114232" />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartCard: {
    marginVertical: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CoverImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  cartCardContent: {
    flexDirection: "row",
    width: "70%",
  },
});
