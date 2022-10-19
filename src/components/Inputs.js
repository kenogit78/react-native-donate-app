import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Input } from "@rneui/themed";

const Inputs = (props) => {
    const [isFocused, setIsFocused] = useState(false)

    const onFocusChange = () => {
        setIsFocused(true)
    }
  return (
    <View style={[styles.container, {borderColor: isFocused ? "rgba(6, 24, 38, 0.4)" : "#eee" }]}>
        <Input
            placeholder={props.name}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputStyle}
            onFocus={onFocusChange}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 330,
        borderRadius: 12,
        borderWidth: 1,
        marginVertical: 8,
        marginHorizontal: 20,
    },
    inputContainer: {
        borderBottomWidth: 0
    },
    inputText: {
        color: "#0779ef"
    }
})

export default Inputs