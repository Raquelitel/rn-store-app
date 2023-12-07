import { View } from '@gluestack-ui/themed'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Product = () => {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});