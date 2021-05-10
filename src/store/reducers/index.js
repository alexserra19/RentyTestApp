  
import { combineReducers } from "redux";
import generalConfigurationReducer from "./generalConfigurationReducer";
import phrasesReducer from "./phrasesReducer";


const AppReducer = combineReducers({
  generalConfigurationReducer,
  phrasesReducer
});

export default AppReducer;