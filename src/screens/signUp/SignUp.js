import React from 'react';
import { View, Text, TextInput, Image, SafeAreaView, Button  } from 'react-native';
import StyleSheetValidation from 'react-native/Libraries/StyleSheet/StyleSheetValidation';
import styles from './styles'

const SignUp = () => {

  return (

    <SafeAreaView style={styles.containerImage } >
       <Image
          style={ styles.splashImage }
          source={ require( '../../../assets/images/splash.png' )}
        />
      <TextInput
        style={ styles.inputs }
        placeholder="FULL NAME"
      />
      <TextInput
        style={ styles.inputs }
        placeholder="PASSWORD"
      />
      <TextInput
        style={ styles.inputs }
        placeholder="E-MAIL"
      />
      <TextInput
        style={ styles.inputs }
        placeholder="PHONE"
      />
      <Button title="Botonazo" style={ styles.formButton }/>
    </SafeAreaView>
  )
}

export default SignUp
