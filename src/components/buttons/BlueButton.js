import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from "./styles"

// eslint-disable-next-line react/prop-types
function BlueButton({ onPressProp }) {
  return (
    <View style={style.buttonContainer}>
      <TouchableOpacity
        style={{
          ...style.button,
          backgroundColor: "#4D6CFE"
        }}
        onPress={onPressProp}
      >
        <Text
          style={{
            ...style.buttonText,
            color: "#f1f1f1",
          }}>
          signUp
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BlueButton