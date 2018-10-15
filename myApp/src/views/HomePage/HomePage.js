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
import {Text, View} from 'react-native';

import { Header } from "../../components/Header";

import { HomeContent } from "./components/HomeContent";
import Tabbar from "react-native-tabbar-bottom";
import {SearchPage} from "../SearchPage/SearchPage";

export class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            page: "HomePage",
        }
    }

    render(){
        return (
            <View style={{flex: 1}}>

                <View>
                    <Header Title={"My App"}/>
                </View>

                {this.state.page === "HomeScreen" && <HomeContent UserName={this.props.username}/>}
                {this.state.page === "SearchScreen" && <SearchPage />}

                <Tabbar
                    stateFunc={(tab) => {
                        this.setState({page: tab.page})
                    }}
                    activePage={this.state.page}
                    tabs={[
                        {
                            page: "HomeScreen",
                            icon: "home",
                        },
                        {
                            page: "SearchScreen",
                            icon: "search",
                        },
                    ]}
                />
            </View>
        );
    }
}