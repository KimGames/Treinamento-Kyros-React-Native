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
import {StyleSheet, Text, View, Image} from 'react-native';

export class ResultPage extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{uri: this.props.image}}
                        />
                    </View>
                    <Text style={styles.temperature}>{this.props.temp_max}{" ºC"}</Text>
                    <Text style={styles.conditionName}>{this.props.condition}</Text>
                    <Text style={styles.location}>{this.props.city}</Text>
                    <Text style={styles.location}>{this.props.date}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F6416C'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    temperature: {
        fontSize: 40,
        color: '#fff',
        flexDirection: 'row',
        textAlign: 'center'
    },
    conditionName: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    },
    location: {
        fontSize: 26,
        color: '#fff',
        textAlign: 'center'
    }
});