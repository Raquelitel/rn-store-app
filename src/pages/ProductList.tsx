import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ProductList = () => {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
    </View>  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});