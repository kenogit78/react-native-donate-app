import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ClothesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Clothes</Text>
    </View>
  )
}

export default ClothesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})