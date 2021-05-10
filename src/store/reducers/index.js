  
import { combineReducers } from "redux";
import generalConfigurationReducer from "./generalConfigurationReducer";

const AppReducer = combineReducers({
  generalConfigurationReducer,
});

export default AppReducer;