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
import { Text, View, TouchableHighlight } from 'react-native';

import { Sae } from 'react-native-textinput-effects';
import { Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'react-native-firebase'

import { LoginFormStyles } from "../../../styles/Styles";

export class LoginContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPassword: ''
        };
    }

    onPressDoLogin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.userName, this.state.userPassword)
            .then(() => Actions.homePage({ username: this.state.userName }))
            .catch(error => console.log(error));
    };

    render() {
        return (
            <View>

                <View>
                    <Sae
                        raised
                        label={ 'Email' }
                        iconClass={ Icon }
                        iconName={ 'md-contact' }
                        iconColor={ 'black' }
                        inputStyle={ LoginFormStyles.input }
                        onChangeText={ (userName) => this.setState({userName: userName}) }
                        value={ this.state.userName }
                    />
                </View>

                <View>
                    <Sae
                        raised
                        label={ 'Senha' }
                        iconClass={ Icon }
                        iconName={ 'md-key' }
                        iconColor={ 'black' }
                        inputStyle={ LoginFormStyles.input }
                        secureTextEntry
                        onChangeText={ (userPassword) => this.setState({userPassword: userPassword}) }
                        value={ this.state.userPassword }
                    />
                </View>

                <View style={ LoginFormStyles.viewButton }>
                    <TouchableHighlight style={ LoginFormStyles.loginButton } onPress={ () => { this.onPressDoLogin() } }>
                        <Text style={ LoginFormStyles.loginButtonText }>
                            Login
                        </Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}