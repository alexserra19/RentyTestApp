import generalConfigurationTypes from '../types/generalConfigurationTypes';
import { Action } from 'redux';

const generalConfigurationAction: IGeneralConfigurationAction = {
  initializeStart() {
    return {
      type: generalConfigurationTypes.INITIALIZE_START,
    };
  },
  initializeFinish() {
    return {
      type: generalConfigurationTypes.INITIALIZE_FINISH,
    };
  },
}

export default generalConfigurationAction;

export interface IGeneralConfigurationAction {
  initializeStart?: () => Action;
  initializeFinish?: () => Action;
}
