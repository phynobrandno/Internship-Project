import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/constant/colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { cartcontext } from "@/cartcontext/cartcontext";
import { useContext } from "react";

const ProductCart = ({item,handleliked}) => {
  const { addToCart } = useContext(cartcontext);

  const route = useRouter();
  //const [isliked, setIsLiked] = React.useState(false);
  return (
    <TouchableOpacity onPress={()=>route.push({pathname:'/ProductDetails', params:{
      courseParams:JSON.stringify(item),
      id:item.id,
      image:item.image,
      title:item.title,
      description:item.description,
      price:item.price,
      isliked:item.isLiked
    }})} style={styles.container}>
      <View style={styles.container2}>
      <Image
        source={{uri: item.image}}
        style={styles.CoverImage}
      />
      <Text style={styles.Tittle}>{item.title}</Text>
      <Text style={styles.subTittle}>{item.description}</Text>
      <View style={styles.PriceContainer}>
        <Text style={styles.PriceText}>${item.price}</Text>
        <Text style={styles.PriceCart} onPress={() => addToCart(item)}>+</Text>
      </View>
      <TouchableOpacity onPress={() => {handleliked(item)}} style={styles.LikeContaner}>
      {item?.isLiked ? (
        <AntDesign
        name="heart"
        size={24}
        color={"red"}

      /> ):
      (
        <AntDesign
          name="hearto"
          size={24}
          color={colors.primary}


        />
      
      )  }


      </TouchableOpacity>
      </View>


      
    </TouchableOpacity>
    
    
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    width: 153,
    height: 260,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F5F6F7",
    borderWidth: 1,
    textAlign: "left",
    marginTop: 10,
  },
  CoverImage: {
    width: 143,
    borderRadius: 16,
    height: 133,
    marginBottom: 10,
    marginVertical: 10,
    marginHorizontal: 10,
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
  PriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: 143,
    height: 24,
  },
  PriceText: {
    fontSize: 17,
    fontWeight: "semibold",
    color: "#623947",
    width: 43,
    height: 20,
  },
  PriceCart: {
    fontSize: 14,
    fontWeight: "semibold",
    color: colors.white,
    width: 20,
    height: 20,
    backgroundColor: "#623947",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  LikeContaner: {
    width: 34,
    height: 34,
    backgroundColor: "#fff",
    borderRadius: 8,
    position: "absolute",
    top: 35,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
