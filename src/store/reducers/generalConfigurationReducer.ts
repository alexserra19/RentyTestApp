import generalConfigurationTypes from '../types/generalConfigurationTypes';

export interface State {
  initialized?: boolean;
}

export const initialState: State = {
  initialized: false,
};

const generalConfigurationReducer = (state: State = initialState, action: any) => {
  switch (action.type) {

    case generalConfigurationTypes.INITIALIZE_START:
      return {
        ...state,
        initialized: false
      }

    case generalConfigurationTypes.INITIALIZE_FINISH:
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
};

export default generalConfigurationReducer;


