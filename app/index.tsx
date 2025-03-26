import { Text, View, Image,StyleSheet,TouchableOpacity } from "react-native";
import Colors  from "../constant/colors";
import colors from "../constant/colors";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();

  return (
    <View
    style={{
      flex: 1,
      backgroundColor:Colors.lightGray,
      borderRadius: 24,
    }}
 
  >
    <Image source={require("../assets/images/Frame 1.png")}
    style={{
      alignSelf: 'center',
      width: '100%',
      height:401,
      borderRadius: 5,

      }}
    />
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.lightGray,
    
    }}>

      <Text style={
        {
          fontSize: 25,
          color: Colors.white,
          textAlign: 'center',
          marginTop: 80,
          fontWeight: 'semibold',
        }
      }>Welcome to Wechart Market</Text>
        <Text style={
        {
          fontSize: 14,
          color: Colors.text,
          textAlign: 'center',
          marginTop: 20,
          fontWeight: 'medium',
          alignItems: 'center',
          justifyContent: 'center',
          width:294
        }
      }>Find various kinds of electronic items that are very useful for your needs</Text>




<TouchableOpacity  style={styles.button} onPress={() => router.push("/auth/login")}>
  
   <Text style={styles.buttonpress}>  Continue </Text>

</TouchableOpacity>

</View>
</View>
  
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Colors.white,
  width: 343,
  height: 44,
  marginTop: 90,
  marginLeft: 15.5,
  marginRight: 15.5,
  borderRadius: 25,
  },
  buttonpress: {
    fontSize: 12,
    color: Colors.lightGray,
    fontWeight: 'medium',
    width:54,
    height: 22,

  }

});