import { View, Text, Image, StyleSheet, Pressable, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
// import { s } from "react-native-wind";
import Input from '../../components/Inputs';

const LoginScreen = ({navigation}) => {
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
                source={require('../../../assets/images/loginLogo.png')}
                style={styles.image}
            />
    
        
            <View style={{alignItems:'center', }}>
                <Text style={styles.text}> 
                    Welcome  
                    <Text style={{color:'#4169E1'}}> Back!!</Text> 

                </Text>
                <Text style={styles.smallText}> Let’s help create an account</Text>

            </View>

            <View style={{marginTop: 20, alignItems: 'center'} }>
                
                <Input name="Enter Email Address" />
                <Input name="Enter Password" />
              
                {/* <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text.password}
                /> */}

                <Pressable
                    title="Press me"
                    onPress={() => navigation.navigate('Tabs')}
                    // onPress={() => Alert.alert('Simple Button pressed')}
                    style={styles.button}>
                    <Text style={{color:'white'}} >Log in</Text>
                </Pressable>
                
            </View>

            <View style={{ alignItems: 'center'} }>
                <Text style={{color:'#1BDDAF', margin: 10}}> OR</Text>

                <Text> Login with Fingerprint</Text>

                <Image 
                    resizeMode='center'
                    source={require('../../../assets/images/fingerprint.png')}
                    style={styles.image}
                />

                <View style={{marginTop: 40, marginBottom: 40, flexDirection:'row', alignItems: 'center', justifyContent:'space-between',} }>
                    <Text> Dont have an account?</Text>
                    <Text style={{color:'#2DD297', marginLeft: 90}}  onPress={() => navigation.navigate('Sign Up')} > 
                        SignUp Here
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
    //  image: {

    //  },
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


export default LoginScreen