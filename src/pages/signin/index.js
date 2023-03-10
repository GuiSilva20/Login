import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, secureTextEntry, KeyboardAvoidingView } from 'react-native';
import {
  container,
  styles,
  containerHeader,
  message,
  containerForm,
  title,
  input,
  button,
  buttonText,
  buttonSign,
  buttonSignText,
  logIcons,
  goBack,
  goBackText,
  signUpContainer,
  eye,
  passwordContainer,
  inputEmail
} from './styles';
import * as Animatable from 'react-native-animatable'
import '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import { set } from 'react-native-reanimated';



export default function Signin() {
  const { t, i18n } = useTranslation()
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [eye, setEye] = useState(true)

 
useState (() => {
})


  return (

    <View style={styles.container}>

      <Animatable.View
        animation='fadeInLeft'
        delay={500}
        style={styles.containerHeader}
      >
        <View>
          <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <Feather name='arrow-left' size={25} color="#FFF" />
            <Text style={styles.goBackText}>{t('Retornar')}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.message} >{t('Bem-vindo(a)')}</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <View style={styles.logIcons}>
          <Feather name='mail' size={20} />
          <Text style={styles.title}>{t('Email')}</Text>
        </View>
        <TextInput
          placeholder={t('Digite um email...')}
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.inputEmail}
        />

        <View style={styles.logIcons}>
          <Feather name='lock' size={20} />
          <Text style={styles.title}>{t('Senha')}</Text>
        </View>
        <View style={styles.passwordContainer} >
          <TouchableOpacity style={styles.eye} onPress={() => eye ? setEye(false) : setEye(true)}>
            {eye ? (

              <Feather name='eye-off' size={18} />

            ) : (
              <Feather name='eye' size={18}/> 
            )
            }
          </TouchableOpacity>

          <TextInput
            placeholder={t('Digite uma senha...')}
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry={eye}
            
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{t('Acessar')}</Text>
        </TouchableOpacity>
        <Animatable.View
          animation="fadeInLeft"
          delay={900}
          style={styles.signUpContainer}>
          <TouchableOpacity style={styles.buttonSign}>
            <Feather name='help-circle' size={15} color="#a1a1a1" />
            <Text style={styles.buttonSignText} onPress={() => navigation.navigate('Register')}>{t('Não possui uma conta? Cadastre-se!')}</Text>
          </TouchableOpacity>
        </Animatable.View>

      </Animatable.View>
    </View>
  );
}