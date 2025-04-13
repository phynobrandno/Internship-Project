import { SafeAreaView,StyleSheet, Text, TouchableOpacity, View,Image, Alert, FlatList,FlatListComponent } from 'react-native'
import React from 'react'
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "@/constant/colors";
import { useNavigation } from "@react-navigation/native";

const Profile = (isCart) => {
const navigation = useNavigation();
// const Data=[
//   {id:1,iconeLeft:<Image source={require("@/assets/images/history.png")}/>, label:"Order History", next:<Image source={require("@/assets/images/right-arrow.png")}/>}, 
//   {id:2,iconeLeft:<Image source={require("@/assets/images/location.png")}/>, label:"Shipping Address", next:<Image source={require("@/assets/images/right-arrow.png")}/>}, 
//   {id:3,iconeLeft:<Image source={require("@/assets/images/privacy-policy.png")}/>, label:"Privacy Policy", next:<Image source={require("@/assets/images/right-arrow.png")}/>}, 
//   {id:4,iconeLeft:<Image source={require("@/assets/images/quote-request.png")}/>, label:"Create Request", next:<Image source={require("@/assets/images/right-arrow.png")}/>}, 
//   {id:5,iconeLeft:<Image source={require("@/assets/images/setting.png")}/>, label:"Setting", next:<Image source={require("@/assets/images/right-arrow.png")}/>}, 
//   {id:5,iconeLeft:<Image source={require("@/assets/images/logout.png")}/>, label:"Log out", next:<Image source={require("@/assets/images/right-arrow.png")}/>}, 

// ]
  
const Data = [
  {
    id: '1',
    iconeLeft: require('@/assets/images/history.png'),
    label: 'Order History',    
    next: require('@/assets/images/right-arrow.png'), 

  },
  {
    id: '2',
    iconeLeft: require('@/assets/images/location.png'),
    label: 'Shipping Address',
    next: require('@/assets/images/right-arrow.png'), 


  },
  {
    id: '3',
    iconeLeft: require('@/assets/images/privacy-policy.png'),
    label: 'Privacy Policy',
    next: require('@/assets/images/right-arrow.png'), 

  },
  {
    id: '4',
    iconeLeft: require('@/assets/images/quote-request.png'),
    label: 'Create Request',
    next: require('@/assets/images/right-arrow.png'), 

  },
  {
    id: '5',
    iconeLeft: require('@/assets/images/setting.png'),
    label: 'Settings',
    next: require('@/assets/images/right-arrow.png'), 

  },
  {
    id: '6',
    iconeLeft: require('@/assets/images/logout.png'),
    label: 'Log out',
    next: require('@/assets/images/right-arrow.png'), 

  },
];
  return (
<SafeAreaView style={styles.container}>
<TouchableOpacity onPress={() => navigation.goBack()}>
      {
      isCart?( <Ionicons name={"chevron-back" }color={colors.lightGray} size={24}/>):(
<Ionicons name={"chevron-back" }color={colors.lightGray} size={24}/>
      )
    }
    </TouchableOpacity >
    <View style={styles.containerText}> 
      <Text style={styles.profileText}>
        Profile
      </Text>
    </View>
    <View style={styles.containerProfile}>
    <View style={styles.profileView}>
    <View style={styles.profileViewTwo}>
      <View >
        <Image source={require("@/assets/images/profile.png")} style={{width: 120, height: 120, borderRadius: 100}}/>
        <TouchableOpacity onPress={()=>Alert.alert("Edith Profile")} >
        <Image source={require("@/assets/images/edit.png")} style={{position:"absolute", bottom: -8, right: 0, width:30,height:30}}/>
        </TouchableOpacity>
      </View>
    </View>

    </View>

    <View style={{marginTop: 10, alignContent:"center", justifyContent:"center", }}>
      <Text style={styles.information1}>GodWILL CHINEMEREM OKORIE</Text>
      <Text style={styles.information}>godwillchinemere44@gmail.com</Text>
      <Text style={styles.information}>+23408142591169</Text>
    </View>

     </View>
    <FlatList 
      data={Data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <View style={{flexDirection:"row",width:"90%"}}>
          <Image source={item.iconeLeft} style={styles.icon} />
          <Text style={styles.label}>{item.label}</Text>
          </View>
         <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
          <Image source={item.next} style={{width: 20, height: 20, }}/>
          </TouchableOpacity>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      style={{marginTop: 20,}}
    
      />
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    marginHorizontal:0,
    marginTop:30,
  },
  backbutton:{
   
    marginBottom:15,
  },
  profileText:{
    width: 88,
    height: 36,
    fontSize: 30,
    fontWeight: "semibold",
    color: colors.lightGray,
   
  },
  containerText:{
    justifyContent:"center",
    alignItems:"center",
  },
  containerProfile:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,

    
  },
  profileView:{
    justifyContent:"center",
    alignItems:"center",
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.rounprofilecolor,
    
    
  },
  profileViewTwo:{
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  information1:{
    fontSize: 12,
    fontWeight: "bold",
    color: colors.lightGray,
    marginTop:10
  },
  information:{
    fontSize: 10,
    fontWeight: "semibold",
    color: colors.lightGray,
    marginTop:5,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
  },

  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    
  },
})