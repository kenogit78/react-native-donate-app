import { View, Text, SafeAreaView, FlatList, Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const {width, height} = Dimensions.get('window');
const slides = [
    {
        id: '1',
        image: require('../../../assets/images/onboarding/clothes.png'),
        title: 'Help the needy',
        subtitle: 'Help the needy by giving out items to them easily.'
    },
    {
        id: '2',
        image: require('../../../assets/images/onboarding/donate.png'),
        title: 'Donate Seamlessly',
        subtitle: 'Donate in cash and kind to the needy.'
    },
    {
        id: '3',
        image: require('../../../assets/images/onboarding/anonymous.png'),
        title: 'Go Anonymous',
        subtitle: 'Donate freely without a trace of your presence.'
    },
]

const Slide = ({item}) => {
    return (
    <View style={{alignItems:'center', justifyContent:'center' }}> 
        <Image 
            source={item.image} 
            style={{height: 128, width, resizeMode: 'contain' }} 
        />
        <Text style={styles.title}> {item.title} </Text>
        <Text style={styles.subtitle}> {item.subtitle} </Text>
    </View>
    )
}

const OnboardingScreen = () => {
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#1BDDAF'}}>
        {/* <StatusBar style={{backgroundColor:'green'}}/> */}
        <FlatList 
            pagingEnabled
            data={slides} 
            contentContainerStyle={{height: height * 0.75}} 
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Slide item={item} /> }
        />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
      title: {
          color: 'white',
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 20,
          textAlign: 'center'
      },
      subtitle: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#FFFFFF',
        maxWidth: '75%',
        marginTop: 10
      }
    })

export default OnboardingScreen

