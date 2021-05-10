import phrasesTypes from '../types/phrasesTypes';

export interface State {
  phrases?: String[];
}

export const initialState: State = {
  phrases: [],
};

const generalConfigurationReducer = (state: State = initialState, action: any) => {
  switch (action.type) {

    case phrasesTypes.SAVE_PHRASE:
      return {
        ...state,
        phrases: [...state.phrases, action.data]
      }

    default:
      return state
  }
};

export default generalConfigurationReducer;


