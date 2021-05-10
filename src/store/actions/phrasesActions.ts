import phrasesTypes from '../types/phrasesTypes';
import { Action } from 'redux';

const phrasesAction: IPhrasesAction = {
  savePhrase(phrase: string) {
    return {
      type: phrasesTypes.SAVE_PHRASE,
      data: phrase 
    };
  },
}

export default phrasesAction;

export interface IPhrasesAction {
  savePhrase?: (phrase: string) => Action;
}
