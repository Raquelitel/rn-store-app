import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});