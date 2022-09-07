import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView
} from 'react-native'

import { auth } from '../firebaseAuth/firebase'
import { signInWithEmailAndPassword} from 'firebase/auth';


const img = require('../../assets/foodies.png')

const Login = () => {
  const navigate = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
      navigate.replace("Home");
    })
      .catch(error => alert(error.message))
  }
  const navigateToRegister=()=>{
    navigate.replace("Home");
 }
  const browse=()=>{
    navigate.replace("Home");
 }
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5E0E0", width: "100%" }}>

      <View>
        <Text style={{ color: "black", padding: 5, fontSize: 20, fontWeight: "800", marginTop: 30, }}>FOODIES</Text>

      </View>
      <View style={{ backgroundColor: 'black', width: '100%', height: 57, marginTop: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#F5E0E0', fontWeight: 'bold', fontSize: 32, }}>LOGIN</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <Image source={img} style={{ width: '90%', height: 200, }} />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 22, }}>
        <TextInput
          placeholder='Enter Your Email Address'
          style={{
            width: '95%',
            height: 47,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 200,
            fontSize: 20,
            color: 'rgba(0, 0, 0, 0.5)',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginTop: 10,
          }}
          onChangeText={text => setEmail(text)}/>

        <TextInput
          placeholder='Enter Your Password'
          style={{
            width: '95%',
            height: 47,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 200,
            fontSize: 20,
            color: 'rgba(0, 0, 0, 0.5)',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginTop: 20
          }}   
          onChangeText={text => setPassword(text)}/>
      </View>

      <TouchableOpacity 
      onPress={handleLogin}
      style={{ backgroundColor: 'rgba(192, 9, 9, 0.96)', justifyContent: 'center', alignItems: 'center', width: '50%', height: 35, borderRadius: 20, marginTop: 25, marginLeft: "23%" }}>
        <Text style={{ color: "white", fontWeight: "bold", fontFamily: "Inter", fontSize: 20 }}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'center', marginTop: 20 }}
      onPress={navigateToRegister}>
        <Text style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: 16, color: '#000000' }}>Don't have account?</Text><Text style={{
          color: "#4B0808", fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: 16,
        }}>REGISTER</Text>
      </TouchableOpacity >
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}
      onPress={browse}>
        <Text style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: 16, color: 'black', alignItems: 'center', justifyContent: 'center' }}>Browse</Text>
      </TouchableOpacity>
    </SafeAreaView>

  )
}
export default Login