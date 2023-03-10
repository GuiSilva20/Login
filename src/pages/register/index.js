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
                    <Text style={styles.buttonSignText} onPress={() => navigation.goBack()}>{t('Já possui uma conta? Faça o login!')}</Text>
                </TouchableOpacity>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.termsContainer}>

                        <Text style={styles.termsTitle}>{t("Termos e condições de uso do site ou blog")}</Text>
                        <Text style={styles.terms}>{t("Seja bem-vindo ao nosso site. Leia com atenção todos os termos abaixo.")}</Text>
                        <Text style={styles.terms}>{t("Este documento, e todo o conteúdo do site é oferecido por Insider, neste termo representado apenas por Insider Co., que regulamenta todos os direitos e obrigações com todos que acessam o site, denominado neste termo como VISITANTE, reguardado todos os direitos previstos na legislação, trazem as cláusulas abaixo como requisito para acesso e visita do mesmo, situado no aplicativo Insider.")}</Text>
                        <Text style={styles.terms}>{t("A permanência no website implica-se automaticamente na leitura e aceitação tácita do presente termos de uso a seguir. Este termo foi atualizado pela última vez em 14 de setembro de 2021.")}</Text>
                        <Text style={styles.termsTitle}>{t("1. DA FUNÇÃO DO SITE")}</Text>
                        <Text style={styles.terms}>{t("Este site foi criado e desenvolvido com a função de trazer conteúdo informativo de alta qualidade, a venda de produtos físicos, digitais e a divulgação de prestação de serviço. A EMPRESA busca através da criação de conteúdo de alta qualidade, desenvolvido por profissionais da área, trazer o conhecimento ao alcance de todos, assim como a divulgação dos próprios serviços.")}</Text>
                        <Text style={styles.terms}>{t("Nesta plataforma, poderá ser realizado tanto a divulgação de material original de alta qualidade, assim como a divulgação de produtos de e-commerce.")}</Text>
                        <Text style={styles.terms}>{t("Todo o conteúdo é atualizado periodicamente, porém, pode conter em algum artigo, vídeo ou imagem, alguma informação que não reflita a verdade atual, não podendo a EMPRESA ser responsabilizada de nenhuma forma ou meio por qualquer conteúdo que não esteja devidamente atualizado.")}</Text>
                        <Text style={styles.terms}>{t("É de responsabilidade do usuário de usar todas as informações presentes no site com senso crítico, utilizando apenas como fonte de informação, e sempre buscando especialistas da área para a solução concreta do seu conflito.")}</Text>


                    </View>
                </ScrollView>

            </Animatable.View>

        </View>
    );

}