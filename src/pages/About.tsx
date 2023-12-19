import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const About = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.container}>
      <Text>About</Text>
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