import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
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
    terms,
    termsTitle,
    termsContainer
} from './styles';
import * as Animatable from 'react-native-animatable'
import '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'


export default function Register() {
    const { t, i18n } = useTranslation()
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <Animatable.View
                animation='fadeInLeft'
                delay={500}
                style={styles.containerHeader}
            >
                <View>
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.navigate('Welcome')}>
                        <Feather name='x' size={25} color="#FFF" />
                        <Text style={styles.goBackText}>{t('Cancelar')}</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.message} >{t('Registro')}</Text>
            </Animatable.View>
            <Animatable.View
                animation="fadeInUp"
                style={styles.containerForm}
            >
                <View style={styles.logIcons}>
                    <Feather name='user' size={20} />
                    <Text style={styles.title}>{t('Email')}</Text>
                </View>
                <TextInput
                    placeholder={t('Digite um email...')}
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <View style={styles.logIcons}>
                    <Feather name='user' size={20} />
                    <Text style={styles.title}>{t('Senha')}</Text>
                </View>
                <TextInput
                    placeholder={t('Digite uma senha...')}
                    style={styles.input}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>{t('Registrar')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSign}>
                    <Text style={styles.buttonSignText} onPress={() => navigation.goBack()}>{t('J?? possui uma conta? Fa??a o login!')}</Text>
                </TouchableOpacity>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.termsContainer}>

                        <Text style={styles.termsTitle}>{t("Termos e condi????es de uso do site ou blog")}</Text>
                        <Text style={styles.terms}>{t("Seja bem-vindo ao nosso site. Leia com aten????o todos os termos abaixo.")}</Text>
                        <Text style={styles.terms}>{t("Este documento, e todo o conte??do do site ?? oferecido por Insider, neste termo representado apenas por Insider Co., que regulamenta todos os direitos e obriga????es com todos que acessam o site, denominado neste termo como VISITANTE, reguardado todos os direitos previstos na legisla????o, trazem as cl??usulas abaixo como requisito para acesso e visita do mesmo, situado no aplicativo Insider.")}</Text>
                        <Text style={styles.terms}>{t("A perman??ncia no website implica-se automaticamente na leitura e aceita????o t??cita do presente termos de uso a seguir. Este termo foi atualizado pela ??ltima vez em 14 de setembro de 2021.")}</Text>
                        <Text style={styles.termsTitle}>{t("1. DA FUN????O DO SITE")}</Text>
                        <Text style={styles.terms}>{t("Este site foi criado e desenvolvido com a fun????o de trazer conte??do informativo de alta qualidade, a venda de produtos f??sicos, digitais e a divulga????o de presta????o de servi??o. A EMPRESA busca atrav??s da cria????o de conte??do de alta qualidade, desenvolvido por profissionais da ??rea, trazer o conhecimento ao alcance de todos, assim como a divulga????o dos pr??prios servi??os.")}</Text>
                        <Text style={styles.terms}>{t("Nesta plataforma, poder?? ser realizado tanto a divulga????o de material original de alta qualidade, assim como a divulga????o de produtos de e-commerce.")}</Text>
                        <Text style={styles.terms}>{t("Todo o conte??do ?? atualizado periodicamente, por??m, pode conter em algum artigo, v??deo ou imagem, alguma informa????o que n??o reflita a verdade atual, n??o podendo a EMPRESA ser responsabilizada de nenhuma forma ou meio por qualquer conte??do que n??o esteja devidamente atualizado.")}</Text>
                        <Text style={styles.terms}>{t("?? de responsabilidade do usu??rio de usar todas as informa????es presentes no site com senso cr??tico, utilizando apenas como fonte de informa????o, e sempre buscando especialistas da ??rea para a solu????o concreta do seu conflito.")}</Text>


                    </View>
                </ScrollView>

            </Animatable.View>

        </View>
    );

}