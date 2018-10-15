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

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

import { IntroPageStyles } from "../../styles/Styles";
import { Colors } from "../../styles/Styles";

export class IntroPage extends Component {

    onPressGoLogin = () => {
        Actions.loginPage({  });
    };

    render(){
        return (
            <Swiper style={ IntroPageStyles.wrapper }
                    showsButtons={false}
                    loop={false}>

                <View style={ IntroPageStyles.slide1 }>
                    <Text style={ IntroPageStyles.text }>
                        Apresentando a aplicação
                    </Text>
                </View>

                <View style={ IntroPageStyles.slide2 }>
                    <Text style={ IntroPageStyles.text }>
                        De forma simples e legal
                    </Text>
                </View>

                <View style={ IntroPageStyles.slide3 }>
                    <Text style={ IntroPageStyles.text }>
                        Pode entrar :)
                    </Text>

                    <Button
                        onPress={ () => { this.onPressGoLogin() } }
                        title="Continuar"
                        color={ Colors.Purple }
                    />
                </View>

            </Swiper>
        );
    }
}