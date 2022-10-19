import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { s } from "react-native-wind";
import Input from '../../components/Inputs';
import { justifyContent } from 'react-native-wind/dist/styles/flex/justify-content';

const SignUpScreen = ({navigation}) => {
    // const [text, onChangeText] = useState({
    //     fullName: "Enter Fullname",
    //     email: "Enter Email Address",
    //     password: "Enter Password"

    // });
  return (
    <ScrollView>
        <View style={styles.container}>
        
            <Image 
                resizeMode='center'
                source={require('../../../assets/images/logo.png')}
                style={styles.image}
            />
    
        
            <View style={{alignItems:'center', }}>
                <Text style={styles.text}> 
                    Let’s get you  
                    <Text style={{color:'#1BDDAF'}}> started!</Text> 

                </Text>
                <Text style={styles.smallText}> Let’s help create an account</Text>

            </View>

            <View style={{marginTop: 20, alignItems: 'center'} }>
                
                <Input name="Enter Fullname" />
                <Input name="Enter Email Address" />
                <Input name="Enter Password" />
              
                {/* <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text.password}
                /> */}

                <Pressable
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                    style={styles.button}>
                    <Text style={{color:'white'}} >Sign Up</Text>
                </Pressable>
                
            </View>

            <View style={{ alignItems: 'center'} }>
                <Text style={{color:'#1BDDAF', margin: 10}}> OR</Text>

                <Text> Register with Fingerprint</Text>

                <View style={{marginTop: 40, marginBottom: 40, flexDirection:'row', alignItems: 'center', justifyContent:'space-between',} }>
                    <Text> Have Account?</Text>
                    <Text style={{color:'#2DD297', marginLeft: 150}}  onPress={() => navigation.navigate('Login')}> 
                        Login Here
                    </Text>

                </View>
            </View>
        

       
        </View>
    </ScrollView>
  )
}

 const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        paddingTop: 70
     },
     image: {
        marginTop: 30
     },
      text: {
          fontSize: 24,
          fontWeight: '400',
          marginTop: 5
      },
      smallText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        marginTop: 5
      },
      button: {
        margin: 10,
        width: 330,
        height: 56,
        backgroundColor: '#4169E1',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        
      }
    })


export default SignUpScreen