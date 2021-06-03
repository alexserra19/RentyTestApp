import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import generalConfigurationTypes from '../types/generalConfigurationTypes'
import generalConfigurationActions from '../actions/generalConfigurationActions'
import AppConstants from '../../utils/AppConstants';
import AsyncStorageService from '../../services/asyncStorageService';


export function* initialize() {
    //Aqui aniria el carregar la informació del asyncStorage per a poder visualitzarla despres al llistat
    // un cop carregada aquesta es posaria al reducer de phrasesReducer
    //pero no he tingut més temps

}



export default [
    takeLatest(generalConfigurationTypes.INITIALIZE_START, initialize),
]