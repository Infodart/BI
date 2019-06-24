/**
 * @format
 */
import React, { Component } from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigation from './src/navigation/AppNavigation'


const AppStart = () => {

    return (

            <AppNavigation />

    )
}

AppRegistry.registerComponent(appName, () => AppStart);
