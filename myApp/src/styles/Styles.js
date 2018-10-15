/*
 * [EN]
 * Copyright (C) Kyros Technologies, Inc - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Kim Ruan <kimr@kyros.com.br>, April 2018
 *
 *
 * [NR]
 * Copyright (C) Kyros Technologies, Inc - Alle rettigheter reservert
 *
 * Uautorisert kopiering av denne filen, via hvilket som helst medium, er strengt forbudt
 * Egen og konfidensiell
 * Skrevet av Kim Ruan <kimr@kyros.com.br>, April 2018
 *
 *
 * [PT-BR]
 * Copyright (C) Kyros Technologies, Inc - Todos os direitos reservados
 *
 * Cópias não autorizadas deste arquivo, através de qualquer meio é estritamente proibido
 * Confidenciais e proprietários
 * Escrito por Kim Ruan <kimr@kyros.com.br>, Abril 2018
 */

import { StyleSheet } from 'react-native';

export const Colors = {
    White       : '#FFF',
    Black       : '#000',
    Red         : '#FF0000',
    Purple      : '#841584'
};

const Fonts = {
    PrimaryFont: 'Open Sans'
};

export const HeaderComponentStyles = StyleSheet.create({
    viewHeader: {
        alignItems: 'center',                  // Mantém os itens do componente alinhados no centro
        justifyContent: 'center',              // Mantém o componente alinhado no centro
        backgroundColor: Colors.White,         // Cor de fundo
        height: 60,                            // Altura
        paddingTop: 20,                        // Padding no topo
        shadowColor: Colors.Black,             // Cor da sombra
        shadowOpacity: 0.2,                    // Opacidade da sombra
        elevation: 2,                          // Dá a noção de um componente por cima de outro
        position: 'relative'                   // Tipo de posição
    },
    textHeader: {
        fontSize: 20
    }
});

export const IntroPageStyles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export const LoginFormStyles = StyleSheet.create({
    formContainer: {
        backgroundColor: Colors.White,
        width          : 300,
        paddingTop     : 5,
        paddingBottom  : 20,
        paddingLeft    : 20,
        paddingRight   : 20,
        borderRadius   : 10
    },
    input: {
        color: Colors.Black
    },
    formStyle: {
        marginTop: 4
    },
    loginButton: {
        backgroundColor: Colors.Black
    },
    loginButtonText: {
        color     : Colors.White,
        fontSize  : 16,
        textAlign : 'center',
        margin    : 10,
        fontFamily: Fonts.PrimaryFont,
        fontWeight:'800'
    },
    viewButton: {
        paddingTop: 10
    },
    viewBottom: {
        flexDirection: 'row',
        marginTop: 10
    },
    viewForgottenRegister: {
        flex: 1
    },
    textForgottenPassword: {
        textAlign: 'left'
    },
    textRegister: {
        textAlign: 'right'
    },
    textErrorMessage: {
        color: Colors.Red
    }
});

export const HomePageStyles = StyleSheet.create({
    pageContainer: {
        backgroundColor: Colors.White
    },
    viewWelcome: {
        flexDirection: 'row',
        marginTop: 10
    },
    textWelcome: {
        flex: 1,
        textAlign: 'center'
    },
    viewQRCode: {
        flexDirection: 'row'
    },
    buttonQRCode: {
        flex: 1,
        alignItems: 'center'
    },
    viewPerfil: {
        flexDirection: 'row'
    },
    buttonPerfil: {
        flex: 1,
        alignItems: 'center'
    }
});