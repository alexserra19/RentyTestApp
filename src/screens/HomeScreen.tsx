import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, TextInput, Platform, Alert } from 'react-native';
import AppConstants from '../utils/AppConstants';
import { normalize } from 'react-native-elements';
// import { commonStyles } from '../../styles/common';
import { useDispatch, useSelector } from "react-redux";
import { IsLoadingHoc } from "../components/HOCS/IsLoadingHOC";
import { HeaderBar } from "../components/shared/HeaderBar"
import PhrasesService from "../services/phrasesService";
import phrasesActions from "../store/actions/phrasesActions";

import App from '../App';

interface IHomeScreenProps {
    navigation: any;
    setLoading: Function
}

const HomeScreen = (props: IHomeScreenProps) => {

    const [phrase, setPhrase] = useState(null);
    const userPhrases = useSelector(store => store.phrasesReducer.phrases);

    const dispatch = useDispatch()


    useEffect(() => {
        async function loadInitialPhrase() {
            await loadPhrase()
        }
        loadInitialPhrase()
    }, []);

    useEffect(() => {
       console.log('user phrases ->', userPhrases)
    }, [userPhrases]);

    const loadPhrase = async () => {
        props.setLoading(true)

        let response = await PhrasesService.getPhrase()
        let text

        if (response?.isSuccess) {
            text = response.body.text
        }
        else text = "Something went wrong!"

        setPhrase(text)
        props.setLoading(false)

    }

    const savePhrase = () => {
        dispatch(phrasesActions.savePhrase(phrase))

        /*
            Aqui aniria la part d'actualitzar el AsyncStorage afegint la frase al array de frases que li agraden a l'usuari
        */
    }


    return (
        <SafeAreaView style={styles.centeredView}>
            <HeaderBar
                title={'View My Favs'}
            />
            <View style={styles.phraseContainer}>
                <Text style={styles.phraseText}>{phrase}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: normalize(10)}}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => loadPhrase()}
                        style={styles.button1}
                    >
                        <Text style={styles.buttonText1}>Give Me Another</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => savePhrase()}
                        style={styles.button2}
                    >
                        <Text style={styles.buttonText2}>Love It!</Text>
                    </TouchableOpacity>
                </View>
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
    },

    button1: {
        width: '100%',
        height: normalize(50),
        backgroundColor: AppConstants.colors.black,
    },

    button2: {
        width: '100%',
        height: normalize(50),
        backgroundColor: AppConstants.colors.white,
        borderColor: AppConstants.colors.black,
        borderWidth: 2,
    },

    buttonText1: {
        fontSize: normalize(20),
        color: AppConstants.colors.white,
        textAlign: "center"
    },

    buttonText2: {
        fontSize: normalize(20),
        color: AppConstants.colors.black,
        textAlign: "center"
    }
});
