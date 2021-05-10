import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, TextInput, Platform, Alert } from 'react-native';
import AppConstants from '../utils/AppConstants';
import { normalize } from 'react-native-elements';
// import { commonStyles } from '../../styles/common';
import { useDispatch } from "react-redux";
import { IsLoadingHoc } from "../components/HOCS/IsLoadingHOC";
import { HeaderBar } from "../components/shared/HeaderBar"
import PhrasesService from "../services/phrasesService";

interface IHomeScreenProps {
    navigation: any;
    setLoading: Function
}

const HomeScreen = (props: IHomeScreenProps) => {

    const [phrase, setPhrase] = useState(null);

    const dispatch = useDispatch()


    useEffect(() => {
        props.setLoading(true)
        async function loadInitialPhrase() {
            await loadPhrase()
            props.setLoading(false)
        }

        loadInitialPhrase()
    }, []);


    const loadPhrase = async () => {
        let response = await PhrasesService.getPhrase()
        let text

        if (response?.isSuccess) {
            text = response.body.text
        }
        else text = "Something went wrong!"

        setPhrase(text)
    }


    return (
        <SafeAreaView style={styles.centeredView}>
            <HeaderBar
                title={'View My Favs'}
            />
            <View style={styles.phraseContainer}>
                <Text style={styles.phraseText}>{phrase}</Text>
            </View>
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

    phraseContainer: {
        paddingHorizontal: normalize(20),
        paddingTop: normalize(40),
        height: '70%'
    },

    phraseText: {
        fontSize: normalize(30),
        textAlign: "center",
        fontStyle: "italic"
    }
});
