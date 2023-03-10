import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  styles,
  containerForm,
  title,
  button,
  text,
  buttonText,
  buttonLng,
  lng,
  lngText
} from './styles';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons'

export default function Welcome() {
  const navigation = useNavigation()
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const {t, i18n} = useTranslation()
  const changeLanguage = value => {
    i18n.changeLanguage(value)
    .then(() =>
    setCurrentLanguage(value)

    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          resizeMode="contain"
          source={require('../../../assets/logo.png')}
          style={{
            width: "50%"
          }}
        />
      </View>
      <Animatable.View
        delay={600}
        animation='fadeInUp'
        style={styles.containerForm}>
        <Text style={styles.title}>{t('Monitore e organize seus gastos de qualquer lugar')}</Text>
        
        <Animatable.View
        animation='fadeInUp'
        delay={850}

        style={styles.lng}
        >
          
        <TouchableOpacity style={[
          styles.buttonLng, {
          borderColor: currentLanguage === 'pt' ? '#38a69d' : 'transparent',
          backgroundColor: currentLanguage === 'pt' ? '#FFF' : '#a1a1a1'
        }]} onPress={() => changeLanguage('pt')}>
          <Text style={styles.lngText} >Português - Brasil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonLng, {
          borderColor: currentLanguage === 'en' ? '#38a69d' : 'transparent',
          backgroundColor: currentLanguage === 'en' ? '#FFF' : '#a1a1a1',
        }]} onPress=  { () => changeLanguage('en')}>
          <Text style={styles.lngText} >English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
          styles.buttonLng, {
          borderColor: currentLanguage === 'es' ? '#38a69d' : 'transparent',
          backgroundColor: currentLanguage === 'es' ? '#FFF' : '#a1a1a1'
        }]}  onPress={ () => changeLanguage('es')}>
          <Text style={styles.lngText}>Español</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
          styles.buttonLng, {
          borderColor: currentLanguage === 'ch' ? '#38a69d' : 'transparent',
          backgroundColor: currentLanguage === 'ch' ? '#FFF' : '#a1a1a1'
        }]}  onPress={ () => changeLanguage('ch')}>
          <Text style={styles.lngText}>中国人</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
          styles.buttonLng, {
          borderColor: currentLanguage === 'jp' ? '#38a69d' : 'transparent',
          backgroundColor: currentLanguage === 'jp' ? '#FFF' : '#a1a1a1'
        }]}  onPress={ () => changeLanguage('jp')}>
          <Text style={styles.lngText}>日本</Text>
        </TouchableOpacity>
        </Animatable.View>

        <Text style={styles.text}>{t('Faça o login para começar')}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>{t('Acessar')}</Text>
          
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}
