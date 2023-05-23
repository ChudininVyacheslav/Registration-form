import { TActionTypes } from "./registrationFormReducer";

export interface IRegistrationState {
    name: string;
    secondName: string;
    password: string;
    confirmPassword: string;
    email: string;
    confirmEmail: string;
};

export interface Action {
    type: TActionTypes;
    payload?: Record<string, any>;
};