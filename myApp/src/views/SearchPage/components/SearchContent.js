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

import { Hoshi } from 'react-native-textinput-effects';
import { Actions } from "react-native-router-flux";
import Axios from 'axios';

import { LoginFormStyles } from "../../../styles/Styles";

export class SearchContent extends Component{
    Prevision = {
        city: '',
        state: '',
        country: '',
        condition: '',
        date: '',
        temp_max: '',
        temp_min: '',
        image: ''
    };
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            stateName: ''
        };
    }

    makeRequest = () => {
        let first_url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid' +
            '%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
        let middle_url = '%2C%20';
        let second_url = '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
        let header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        let url = first_url + this.state.cityName + middle_url + this.state.stateName + second_url;

        return Axios.get(url, {headers: header})
            .then((response) => response.data)
            .catch((error) => error);
    };

    getPrevision(){
        return Promise.resolve(this.makeRequest());
    }

    onPressDoSearch = () => {
        this.getPrevision().then((prevision) => {
            console.log(prevision);
            this.Prevision.city = prevision.query.results.channel.location.city;
            this.Prevision.state = prevision.query.results.channel.location.region;
            this.Prevision.country = prevision.query.results.channel.location.country;
            this.Prevision.condition = prevision.query.results.channel.item.forecast[0].text;
            this.Prevision.date = prevision.query.results.channel.item.forecast[0].date;
            this.Prevision.temp_max = (parseInt((parseFloat(prevision.query.results.channel.item.forecast[0].high) - 32) / 1.8)).toString();
            this.Prevision.temp_min = (parseInt((parseFloat(prevision.query.results.channel.item.forecast[0].low) - 32) / 1.8)).toString();
            this.Prevision.image = prevision.query.results.channel.item.description.substring(19, 56);

            Actions.resultPage({
                city: this.Prevision.city,
                state: this.Prevision.state,
                country: this.Prevision.country,
                condition: this.Prevision.condition,
                date: this.Prevision.date,
                temp_max: this.Prevision.temp_max,
                temp_min: this.Prevision.temp_min,
                image: this.Prevision.image
            });
        });
    };

    render() {
        return (
            <View>

                <View>
                    <Hoshi
                        label={'Cidade'}
                        borderColor={'#b76c94'}
                        onChangeText={ (cityName) => this.setState({cityName: cityName}) }
                        value={ this.state.cityName }
                    />
                </View>

                <View>

                    <Hoshi
                        label={'Estado'}
                        borderColor={'#b76c94'}
                        onChangeText={ (stateName) => this.setState({stateName: stateName}) }
                        value={ this.state.stateName }
                    />

                </View>

                <View style={ LoginFormStyles.viewButton }>
                    <TouchableHighlight style={ LoginFormStyles.loginButton } onPress={ () => { this.onPressDoSearch() } }>
                        <Text style={ LoginFormStyles.loginButtonText }>
                            Pesquisar
                        </Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}