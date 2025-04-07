import { View, Text,FlatList,StyleSheet } from "react-native";
import React from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import Head from "@/Component/Home/Head";
import colors from "@/constant/colors";
import ScrollBar from "@/Component/Home/ScrollBar";
import Category from "@/Component/Home/Category";
import ProductCart from "@/Component/Home/ProductCart";
import data from "../../assets/data/data.json"; ;
const Categories=["Mouse","Keyboard","HeadSet","Smartwatch","Laptop"]

export default function Home() {

const [Products, setProducts] = React.useState(data.Products);


  const [selectedCategory, setSelectedCategory] = React.useState('mouse');
  const [ isLiked, setIsLiked] = React.useState(false);

  const handleliked = (item) => {
    const newProducts = Products.map((product) => {
      if (product.id === item.id) {
        return { ...product, 
          isLiked: true
           };
      }
      return product;
    });
    setProducts(newProducts);
  
  }

  return (
    <View style={{  margin:15 }}>
      {/* Header  */}
      <Head />

        <FlatList 
        numColumns={2}
        ListHeaderComponent={
          <>
           {/* Category */}
      {/* <Category /> */}
<FlatList
        data={Categories} 
        renderItem={({item})=><Category item={item} selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory}/> }
        keyExtractor={(item)=>item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
        <View style={styles.PopularProdutTextContainer}>
          <Text style={styles.PopularProdutText}>Popular Product</Text>
          <Text style={styles.FilterText}>Filter</Text>
        </View>


          </>
        }
        data={Products} 
        renderItem={({item,index})=>
        <ProductCart item={item} handleliked={handleliked} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:100}}
        
        />
        {/* Products */}
{/* <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center", marginTop:10}}>
  <ProductCart/>
  <ProductCart/>
</View> */}
     
    </View>
  );
}
//     shadowColor: colors.primary,

export const styles = StyleSheet.create({
  
  PopularProdutText: {
    fontSize: 21,
    fontWeight: "semibold",
    color: '#114232',
    width: 165,
    height: 25,
  },
  FilterText: {
    fontSize: 10,
    fontWeight: "regular",
    width: 24,
    height: 12,
    color: '#759188',
    marginTop: 10,
  },
  PopularProdutTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

})