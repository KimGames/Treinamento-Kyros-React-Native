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

import { View, Text } from "react-native";
import React, { Component } from "react";

import { HomePageStyles } from "../../../styles/Styles";

export class HomeContent extends Component{

    UserName: string;

    render () {
        return (
            <View style={ HomePageStyles.pageContainer }>

                <View style={ HomePageStyles.viewWelcome }>

                    <Text style={ HomePageStyles.textWelcome }>
                        Bem Vindo{ '\n' }{ this.props.UserName }
                    </Text>

                </View>

                <View style={ HomePageStyles.viewWelcome }>

                    <Text style={ HomePageStyles.textWelcome }>
                        O React (às vezes denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto
                        para criar interfaces de usuário. É mantido pelo Facebook, Instagram e uma comunidade de
                        desenvolvedores individuais e outras empresas. De acordo com o serviço de análise de JavaScript
                        Libscore, o React está sendo usado nos sites da Netflix, Imgur, Relatório do Bleaucher, Feedly,
                        Airbnb, SeatGeek, HelloSign, Walmart e outros.
                        No mundo perfeito, você desenvolverá aplicativos para Android e iOS, mas vamos no convencional,
                        você tem uma máquina que roda somente ambiente Android.
                        Antes de tudo, é necessário baixar o Android Studio, suas dependências e criar um emulador
                        compatível com seu computador. Digo as especificações para não deixar o ambiente de
                        desenvolvimento lerdo.
                        Uma dica importante! Se você nunca fez um aplicativo, por mais que seja simples com Android,
                        faça, senão a curva de aprendizado com RN será maior.
                    </Text>

                </View>

            </View>
        )
    }
}
