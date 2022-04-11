import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from "./styles"

const BlueButtonLogin = () => {
  return (
    <View style={ style.buttonContainer}>
      <TouchableOpacity
        style={{
          ...style.button,
          backgroundColor: "#4D6CFE"
        }}
      >
        <Text
          style={{
            ...style.buttonText,
            color: "#f1f1f1",
          }} >
          Registrarse
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BlueButtonLogin