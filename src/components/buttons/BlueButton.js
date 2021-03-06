import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from "./styles"

// eslint-disable-next-line react/prop-types
function BlueButton({ onPressProp, text}) {
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
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BlueButton