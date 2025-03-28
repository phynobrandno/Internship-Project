import { 
  View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import colors from '../../constant/colors';
import { useRouter } from "expo-router";

// Importing the firesbase auth 
import { Firebase_auth } from '@/firebaseconfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const auth = Firebase_auth;

  // Function to control the Registration activities
  const signUp= async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      if (user) router.replace('../home');
    } catch (error: any) {
      console.log(error)
      alert("Sign In failed" + error.message)
    }
  }

  return (
        <View style={Styles.container}>
          <Text style={Styles.title}>Hello! Register to get started.</Text>

          <View style={{ marginTop: 42 }}>
            <TextInput style={Styles.TextInput} placeholder='Username' value={username} onChangeText={setUsername}/>
            <TextInput style={Styles.TextInput} placeholder='Email' keyboardType="email-address" value={email} onChangeText={setEmail}/>
            <TextInput 
              style={Styles.TextInput} 
              placeholder='Password'
              value={password} onChangeText={setPassword} 
              secureTextEntry={true} 
            />
            <TextInput 
              style={Styles.TextInput} 
              placeholder='Confirm password' 
              secureTextEntry={true} 
            />

            <TouchableOpacity>
              <Text style={Styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={Styles.registerButton} 
              onPress={signUp}
            >
              <Text style={Styles.registerText}>Register</Text>
            </TouchableOpacity>

            <Text style={Styles.orText}>------ Or Register with ------</Text>

            <View style={Styles.socialContainer}>   
              <TouchableOpacity>
                <Image 
                  style={Styles.socialIcon} 
                  source={require('./../../assets/images/face2.png')} 
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image 
                  style={Styles.socialIcon} 
                  source={require('./../../assets/images/apple.png')} 
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image 
                  style={Styles.socialIcon} 
                  source={require('./../../assets/images/google2.png')} 
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => router.push('/auth/login')}>
              <Text style={Styles.loginRedirect}>
                Already have an account? Login Now
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
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Times New Roman',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 61,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center',
    color: colors.lightGray,
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
    fontFamily: 'Times New Roman',
  },
  registerButton: {
    marginTop: 32,
    backgroundColor: colors.lightGray,
    borderRadius: 24,
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: colors.forgotpassword,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },
  orText: {
    color: colors.forgotpassword,
    marginTop: 32,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    marginTop: 24,
    justifyContent: 'center',
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginLeft: 8,
    marginTop: 32,
  },
  loginRedirect: {
    color: colors.forgotpassword,
    marginTop: 23,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },
});
