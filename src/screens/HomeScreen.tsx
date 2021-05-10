import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, TextInput, Platform, Alert } from 'react-native';
import AppConstants from '../utils/AppConstants';
import { normalize } from 'react-native-elements';
// import { commonStyles } from '../../styles/common';
import AsyncStorageService from '../services/asyncStorageService';
import { LoadingOverlay } from '../components/shared/LoadingOverlay';
import { useDispatch } from "react-redux";
import generalConfigurationActions from '../store/actions/generalConfigurationActions'
import { IsLoadingHoc } from "../components/HOCS/IsLoadingHOC";
import { HeaderBar } from "../components/shared/HeaderBar"


interface IHomeScreenProps {
    navigation: any;
    setLoading: Function
}

const HomeScreen = (props: IHomeScreenProps) => {

    const dispatch = useDispatch()


    useEffect(() => {
        console.log('------props', props)
        props.setLoading(false)
        return () => {
        }
    }, []);


    return (
        <SafeAreaView style={styles.centeredView}>
            <HeaderBar
                title={'View My Favs'}
            />
        </SafeAreaView>

    );
}

export default IsLoadingHoc(HomeScreen);


const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: AppConstants.colors.white,
        flex: 1,
        height: '100%',
    },
});
