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

import { Scene, Router } from 'react-native-router-flux';

import { IntroPage } from "./views/IntroPage/IntroPage";
import { LoginPage } from "./views/LoginPage/LoginPage";
import { RegisterPage } from "./views/RegisterPage/RegisterPage";
import { HomePage } from "./views/HomePage/HomePage";
import { SearchPage } from "./views/SearchPage/SearchPage";
import { ResultPage } from "./views/ResultPage/ResultPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="loginPage"
                           component={ LoginPage }
                           animation='fade'
                           hideNavBar={true}
                           initial={false}
                    />
                    <Scene key="homePage"
                           component={ HomePage }
                           animation='fade'
                           hideNavBar={true}
                           initial={false}
                    />
                    <Scene key="introPage"
                           component={ IntroPage }
                           animation='fade'
                           hideNavBar={true}
                           initial={true}
                    />
                    <Scene key="searchPage"
                           component={ SearchPage }
                           animation='fade'
                           hideNavBar={true}
                           initial={false}
                    />
                    <Scene key="resultPage"
                           component={ ResultPage }
                           animation='fade'
                           hideNavBar={true}
                           initial={false}
                    />
                    <Scene key="registerPage"
                           component={ RegisterPage }
                           animation='fade'
                           hideNavBar={true}
                           initial={false}
                    />
                </Scene>
            </Router>
        );
    }
}
