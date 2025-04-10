import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import CartCard from '@/Component/Home/CartCard'
import CartHeader from '@/Component/Home/CartHeader'
import { cartcontext } from '@/cartcontext/cartcontext'

const MyCart = () => {
  const { cart } = useContext(cartcontext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <View style={{ flex: 1 }}>
      <CartHeader isCart={true} />
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <View style={styles.PriceContainer}>
            <View style={styles.TotalContainer}>
              <Text style={styles.TotalText}>Total</Text>
              <Text style={styles.Price}>${total}</Text>
            </View>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  PriceContainer: {
    marginTop: 20,
    padding: 20,
  },
  TotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginBottom: 0,
  },
  TotalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#114232",
  },
  Button: {
    backgroundColor: "#114232",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
