import {
  View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ActivityIndicator, Button
} from 'react-native';
import React, { useState } from 'react';
import colors from '../../constant/colors';
import { useRouter } from "expo-router";

// Importing the firebase auth
import { Firebase_auth } from '@/firebaseconfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState(''); //       adding state functions
  const [password, setPassword] = useState(''); // for email and password
  const [loading, setLoading] = useState(false);
  const auth = Firebase_auth;

  // Function to control the login activities
  const signIn = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      if (user) router.replace('../home');
    } catch (error: any) {
      console.log(error)
      alert("Sign In failed" + error.message)
    } finally {
      setLoading(false);
    }
  }

  // Function to control the registration activities
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Welcome! Login to Wechart Market.</Text>

      <View style={{ marginTop: 42 }}>
        {/* email text input */}
        <TextInput style={Styles.TextInput} placeholder='Enter your email' value={email} onChangeText={setEmail} />

        {/* Password test input */}
        <TextInput
          style={Styles.TextInput}
          placeholder='Enter your password'
          secureTextEntry={true}
          value={password} onChangeText={setPassword}
        />
        {/* {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Button title="Login" onPress={() => signIn()} />
          </>
        )} */}
        <TouchableOpacity
          style={Styles.loginButton}
          onPress={signIn}
        >
          <Text style={Styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={Styles.orText}>------Or Login with------</Text>

        <View style={Styles.socialContainer}>
          <TouchableOpacity>
            
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={Styles.socialIcon}
              source={require('./../../assets/images/google2.png')}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push('/auth/signup')}>
          <Text style={Styles.registerText}>
            Don’t have an account? Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Times New Roman',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 61,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center',
    color: colors.lightGray
  },
  TextInput: {
    backgroundColor: colors.textInput,
    borderRadius: 24,
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    width: 343,
    height: 50,
  },
  forgotPassword: {
    color: colors.forgotpassword,
    marginLeft: 16,
    marginTop: 24,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Times New Roman'
  },
  loginButton: {
    marginTop: 32,
    backgroundColor: colors.lightGray,
    borderRadius: 24,
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: colors.forgotpassword,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Times New Roman',
    textAlign: 'center'
  },
  orText: {
    color: colors.forgotpassword,
    marginTop: 32,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Times New Roman',
    textAlign: 'center'
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    marginTop: 24,
    justifyContent: 'center'
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginLeft: 8,
    marginTop: 32
  },
  registerText: {
    color: colors.forgotpassword,
    marginTop: 170,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Times New Roman',
    textAlign: 'center'
  }
});
