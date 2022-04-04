import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import StyleSheetValidation from 'react-native/Libraries/StyleSheet/StyleSheetValidation';

const SignUp = () => {

  return (
    <View style={styles.containerImage }>
        <Image
          style={ styles.splashImage }
          source={ require( '../../../assets/images/splash.png' )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  containerImage: {
    width: 400, 
    height: 400, 
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  splashImage: {
    width: 90, 
    height: 90,
    alignItems: 'center'
  },
});

export default SignUp
