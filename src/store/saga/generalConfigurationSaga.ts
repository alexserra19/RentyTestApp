import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import generalConfigurationTypes from '../types/generalConfigurationTypes'
import generalConfigurationActions from '../actions/generalConfigurationActions'
import AppConstants from '../../utils/AppConstants';
import AsyncStorageService from '../../services/asyncStorageService';


export function* initialize() {

    console.log('----INITIALIZE CONFIGURATION----')

}



export default [
    takeLatest(generalConfigurationTypes.INITIALIZE_START, initialize),
]