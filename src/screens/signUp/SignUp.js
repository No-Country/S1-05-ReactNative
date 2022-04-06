import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import styles from './styles'
import BlueButton from '../../components/buttons/BlueButton'
import { collection, getFirestore } from 'firebase/firestore'

const SignUp = () => {
  const [userName, setUserName ] =useState('')
  const [userPass, setUserPass ] =useState()
  const [userMail, setUserMail ] =useState('')
  const [userPhone, setUserPhone ] =useState(0)

  const sendNewUser = () => {
    const newUser = {
      user: {}
    }
  }

  const saveUserInfo = () => {
    setUserName(fullName)
    setUserPass(password)
    setUserMail(mail)
    setUserPhone(phone)
  }


  return (

    <View 
    style={ styles.container } >
       <Image
          style={ styles.splashImage }
          source={ require( '../../../assets/images/splash.png' )}
        />
      <TextInput
        style={ styles.inputs }
        placeholder="FULL NAME"
        value={ fullName }
      />
      <TextInput
        style={ styles.inputs }
        placeholder="PASSWORD"
        value={ password }
      />
      <TextInput
        style={ styles.inputs }
        placeholder="E-MAIL"
        value={ mail }
      />
      <TextInput
        style={ styles.inputs }
        placeholder="PHONE"
        value={ phone }
      />
      <BlueButton onPress={ saveUserInfo }/>
    </View>
  )
}

export default SignUp
