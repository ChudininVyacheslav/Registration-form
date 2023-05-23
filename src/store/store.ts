import { legacy_createStore as createStore } from 'redux';
import { registrationFormReducer } from './registration/registrationFormReducer';

export const store = createStore(registrationFormReducer);