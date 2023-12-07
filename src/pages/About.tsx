import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Routing';


type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;
const About = ({navigation}: AboutProps) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.container}>
      <Text>About</Text>
      <TouchableOpacity
      style={styles.buttom}
      onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.button_text}>Go Home</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttom: {
        backgroundColor: '#1F7A8C',
        padding: 16,
        borderRadius: 8,
        marginTop: 5
    },
    button_text: {
        color: '#fff',
        fontWeight: '800',
    }
  })