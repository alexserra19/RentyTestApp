import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, ActivityIndicator,TouchableOpacity, Text, TextInput, Platform, Alert } from 'react-native';
import AppConstants from '../utils/AppConstants';
import { normalize } from 'react-native-elements';
// import { commonStyles } from '../../styles/common';
import AsyncStorageService from '../services/asyncStorageService';
import { LoadingOverlay } from '../components/shared/LoadingOverlay';
import { useDispatch } from "react-redux";
import generalConfigurationActions from '../store/actions/generalConfigurationActions'
import { IsLoadingHoc } from "../components/HOCS/IsLoadingHOC";

interface ILoginScreenProps {
    navigation: any;
}

const LoginScreen = (props: ILoginScreenProps)  => {

    const dispatch = useDispatch()


    useEffect(() => {

        console.log('------props', props)
        props.setLoading(true)
        return() => {
        }
    }, []);


    return (
        <View style={styles.centeredView}>
            <Text>Pantalla Inicial</Text>
        </View>

    );
}

export default IsLoadingHoc(LoginScreen);


const styles = StyleSheet.create({
    centeredView: {
        backgroundColor:AppConstants.colors.white,
        flex: 1,
        height:'100%',
    },
});
