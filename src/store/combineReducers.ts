import {combineReducers} from "redux";
import {registrationFormReducer} from "./registration/registrationFormReducer";
import {modalReducer} from "./modal/modalReducer";

export const rootReducer = combineReducers({
  user: registrationFormReducer,
  modal: modalReducer,
});
