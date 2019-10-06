import React, {Component} from 'react';
import { createAppContainer, createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import {connect} from 'react-redux';

import ConversasList from './ConversasList';
import ContatoList from './ContatoList';
import Config from './Config';



const TabNavigator = createBottomTabNavigator({
    ConversasList:{
        screen:ConversasList
    },
    ContatoList:{
        screen:ContatoList
    },
    Config:{
        screen:Config
    }
}, {
    navigationOptions:{
        header: null,
    },
    defaultNavigationOptions:{
        tabBarOptions:{
            labelStyle:{
                fontSize: 14,
            },
        }
    }
});

export default TabNavigator;