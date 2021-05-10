import { all } from 'redux-saga/effects'
import generalConfigurationSaga from './generalConfigurationSaga';


export default function* rootSaga() {
    yield all([
        ...generalConfigurationSaga,
    ])
}