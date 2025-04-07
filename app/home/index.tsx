import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import colors from "../../constant/colors"; // Ensure this exists

export default function LandingPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/welcome.png")} style={styles.logo} />

      <Text style={styles.title}>Welcome to WeChart</Text>
      <Text style={styles.subtitle}>
      Shop the latest electronics at unbeatable prices.      </Text>
      <TouchableOpacity style={styles.flexing}>
      <TouchableOpacity style={styles.button1} onPress={() => router.push("/(tabs)/Home")}>
        <Text style={styles.buttonText}>Continue </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.lightGray,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  button1: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginRight:30,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  loginText: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: "500",
  },
  flexing:{
display:"flex",
flexDirection:'row',
justifyContent:'space-evenly'
  },
});
